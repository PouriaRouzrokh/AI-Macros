## /Users/pouria/Documents/Coding/AI-Macros/apis_example.js

```javascript
/* THis is an example file to show how to store API keys in a separate file and import them into the main file.
The actual file is named apis.js and is not included in the repository for security reasons. */

const APIs = {
    OPENAI_API_KEY: 'YOUR_API_KEY'
  };
  
  export default APIs;
```
## /Users/pouria/Documents/Coding/AI-Macros/src/background/background.js

```javascript
const API_KEY = // YOUR OPENAI API KEY HERE;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'PROCESS_TEXT') {
    const { html, macro } = message;

    console.log("Received message to process:", html, "with macro:", macro);  // Log the received message

    if (macro === 'proofreading') {
      sendForProofreading(html, API_KEY)
        .then(processedText => {
          console.log("Processed text received from API:", processedText);  // Log the response
          sendResponse({ processedText });
        })
        .catch(error => {
          console.error("Error during OpenAI API request:", error);
          sendResponse({ error: error.message });
        });

      // Return true to indicate that the response will be sent asynchronously
      return true;
    } else {
      sendResponse({ error: "Unknown macro type" });
    }
  }
});

// Function to send text to OpenAI API for proofreading
async function sendForProofreading(html, apiKey) {
  const endpoint = "https://api.openai.com/v1/chat/completions";

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ 
        role: 'user', 
        content: `Proofread the following HTML content. 
        Preserve all HTML formatting and structure. 
        Only correct spelling, grammar, and punctuation errors.
        Return the corrected HTML content.
        ONLY RETURN A JSON OBJECT WITH "output" AS THE KEY CONTAINING THE PROOFREAD HTML: ${html}
        AVOID USING BACKTICKS BEFORE OR AFTER THE JSON OBJECT.` 
      }]
    })
  });

  if (!response.ok) {
    throw new Error('Failed to fetch proofread text');
  }

  const data = await response.json();
  const content = data.choices[0].message.content.trim();

  try {
    const parsedContent = JSON.parse(content);
    return parsedContent.output || content;
  } catch (error) {
    console.error("Error parsing API response:", error);
    return content;
  }
}
```
## /Users/pouria/Documents/Coding/AI-Macros/src/popup/popup.js

```javascript
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

```
## /Users/pouria/Documents/Coding/AI-Macros/src/popup/popup.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Macros</title>
  <link rel="stylesheet" href="popup.css">
</head>
<body>
  <p>Please choose your macro:</p>
  <select id="macroSelect">
    <option value="proofreading" selected>Proofreading</option>
  </select>
  <button id="applyButton">Apply</button>
  <div id="output" style="display: none;"></div>
  <script src="popup.js"></script>
</body>
</html>

```
## /Users/pouria/Documents/Coding/AI-Macros/src/popup/popup.css

```css
body {
  font-family: Arial, sans-serif;
  width: 300px;
  padding: 10px;
}

p {
  margin: 0 0 5px 0;
  font-size: 14px;
}

#macroSelect {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  margin-bottom: 10px;
}

button:hover {
  background-color: #45a049;
}

#output {
  margin-top: 10px;
  padding: 10px;
  max-height: 300px;
  overflow-y: auto;
}

#output p {
  margin: 0 0 10px 0;
}

#output ul, #output ol {
  margin: 0 0 10px 0;
  padding-left: 20px;
}

#output li {
  margin-bottom: 5px;
}

```
## /Users/pouria/Documents/Coding/AI-Macros/src/content/content.js

```javascript

```
## /Users/pouria/Documents/Coding/AI-Macros/src/scripts/utils.js

```javascript

```
