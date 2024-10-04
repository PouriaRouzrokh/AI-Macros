document.addEventListener('DOMContentLoaded', function() {
  const macroSelect = document.getElementById('macroSelect');
  const applyButton = document.getElementById('applyButton');
  const outputDiv = document.getElementById('output');

  applyButton.addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const selectedMacro = macroSelect.value;

    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        func: () => {
          const selection = window.getSelection();
          if (selection.rangeCount === 0) return null;

          const range = selection.getRangeAt(0);
          const fragment = range.cloneContents();
          const div = document.createElement('div');
          div.appendChild(fragment);

          const selectedHtmlString = div.innerHTML;
          const selectedText = selection.toString();
          
          const isEditable = (
            selection.anchorNode.isContentEditable ||
            selection.anchorNode.parentElement.isContentEditable ||
            ['INPUT', 'TEXTAREA'].includes(selection.anchorNode.parentElement.tagName)
          );

          return { selectedHtmlString, selectedText, isEditable };
        }
      },
      (results) => {
        if (!results || !results[0] || !results[0].result) {
          showOutput("Error: Failed to get selection");
          return;
        }

        const { selectedHtmlString, selectedText, isEditable } = results[0].result;

        if (!selectedHtmlString) {
          showOutput("Error: No text selected");
          return;
        }

        chrome.runtime.sendMessage(
          { type: 'PROCESS_TEXT', html: selectedHtmlString, macro: selectedMacro },
          (response) => {
            if (chrome.runtime.lastError) {
              showOutput("Error: " + chrome.runtime.lastError.message);
              return;
            }

            if (response.error) {
              showOutput("Error: " + response.error);
              return;
            }

            if (isEditable) {
              chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: (processedText) => {
                  const selection = window.getSelection();
                  if (selection.rangeCount === 0) return;

                  const range = selection.getRangeAt(0);
                  
                  // Create a document fragment from the processed HTML
                  const tempDiv = document.createElement('div');
                  tempDiv.innerHTML = processedText;
                  const fragment = document.createDocumentFragment();
                  while (tempDiv.firstChild) {
                    fragment.appendChild(tempDiv.firstChild);
                  }

                  // Replace the content of the range with the new fragment
                  range.deleteContents();
                  range.insertNode(fragment);

                  // Adjust the selection to encompass the new content
                  selection.removeAllRanges();
                  const newRange = document.createRange();
                  newRange.setStartBefore(fragment.firstChild);
                  newRange.setEndAfter(fragment.lastChild);
                  selection.addRange(newRange);
                },
                args: [response.processedText]
              }, () => {
                if (chrome.runtime.lastError) {
                  showOutput("Error inserting text: " + chrome.runtime.lastError.message);
                } else {
                  showOutput("Processing complete and text updated!");
                }
              });
            } else {
              const formattedContent = formatHTML(response.processedText);
              showOutput(formattedContent);
            }
          }
        );
      }
    );
  });

  function formatHTML(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const container = document.createElement('div');

    function traverse(node, parentElement) {
      if (node.nodeType === Node.TEXT_NODE) {
        parentElement.appendChild(document.createTextNode(node.textContent));
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        let element;
        switch (node.tagName.toLowerCase()) {
          case 'div':
          case 'p':
            element = document.createElement('p');
            break;
          case 'ol':
          case 'ul':
            element = document.createElement(node.tagName);
            break;
          case 'li':
            element = document.createElement('li');
            break;
          default:
            element = document.createElement('span');
        }
        node.childNodes.forEach(child => traverse(child, element));
        parentElement.appendChild(element);
      }
    }

    traverse(doc.body, container);
    return container;
  }

  function showOutput(content) {
    outputDiv.style.display = 'block';
    outputDiv.innerHTML = '';
    if (typeof content === 'string') {
      outputDiv.textContent = content;
    } else {
      outputDiv.appendChild(content);
    }
  }
});
