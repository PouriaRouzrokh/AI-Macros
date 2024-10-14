// Create the bubble element
const bubble = document.createElement('div');
bubble.id = 'ai-macros';
bubble.innerHTML = 'AM';
bubble.style.cssText = `
  position: fixed;
  right: 1px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  z-index: 9999;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
`;

// Add the bubble to the page
document.body.appendChild(bubble);
console.log('Bubble created and added to the page.');

// Add click event listener to the bubble
bubble.addEventListener('click', () => {
  console.log('Bubble clicked!'); // Log when the bubble is clicked
  chrome.runtime.sendMessage({ action: 'clickSidePanel' });
});

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'toggleBubble') {
    bubble.style.display = request.show ? 'flex' : 'none';
    console.log(`Bubble visibility set to: ${request.show}`); // Log visibility changes
  }
});