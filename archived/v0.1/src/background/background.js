const API_KEY = "YOUR_OPENAI_API_KEY";

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