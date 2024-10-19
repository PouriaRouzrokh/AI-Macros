## public/css/apply.css

```css
/* Custom styles for the Apply page */
#apply-container .apply-title {
    color: #4a90e2;
    font-size: 24px;
    margin-bottom: 20px;
}

#apply-container .input-selection {
    margin-bottom: 20px;
}

#apply-container .macro-selection {
    margin-top: 20px;
}

/* Add more custom styles as needed */
```

## public/css/macros.css

```css
/* Custom styles for the Build page */
.build-container {
    padding: 20px;
}

.build-title {
    color: #4caf50;
    font-size: 24px;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
}

textarea.form-control {
    resize: vertical;
    min-height: 100px;
}

select.form-control {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url('data:image/svg+xml;utf8,<svg fill="black" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
    background-repeat: no-repeat;
    background-position-x: 98%;
    background-position-y: 50%;
}

.btn-primary {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.btn-primary:hover {
    background-color: #45a049;
}
```

## public/css/navbar.css

```css
:root {
    --navbar-scale: 0.6;
    --navbar-item-size: calc(70px * var(--navbar-scale));
    --navbar-font-size: calc(14px * var(--navbar-scale));
    --navbar-icon-size: calc(24px * var(--navbar-scale));
}
.navbar {
    background-color: #1a237e !important;
    border-radius: calc(var(--navbar-item-size) / 4);
    padding: 0;
}
.navbar-nav {
    display: flex;
    flex-direction: row;
}
.nav-item {
    width: var(--navbar-item-size);
    height: var(--navbar-item-size);
}
.nav-link {
    color: white !important;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 0;
}
.nav-link:hover .icon {
    transform: translateY(-100%);
}
.nav-link:hover::after {
    transform: translateY(0);
}
.nav-link::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: lightblue;
    color: #1a237e;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: var(--navbar-font-size);
    transform: translateY(100%);
    transition: transform 0.4s ease-out;
}
.icon {
    font-size: var(--navbar-icon-size);
    transition: transform 0.4s ease-out;
}
```

## public/css/apis.css

```css
.api-container {
    padding: 1px;
}

.api-title {
    color: #1a237e;
    font-size: 24px;
    margin-bottom: 20px;
}

.api-list {
    margin-top: 20px;
}

.api-card {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 15px;
    margin-bottom: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.api-card h3 {
    color: #1a237e;
    font-size: 18px;
    margin-bottom: 10px;
}

.api-card p {
    color: #333333;
    font-size: 14px;
    margin-bottom: 5px;
}

.api-key {
    font-family: monospace;
    background-color: #f5f5f5;
    padding: 2px 4px;
    border-radius: 2px;
}

.btn-add-api {
    background-color: #1a237e;
    color: #ffffff;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;
}

.btn-add-api:hover {
    background-color: #3949ab;
}

/* Modal styles */
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 500px;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
```

## public/css/content-container.css

```css
.content-section {
    padding: 10px;
    background-color: #f0f4f8;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    position: relative;
}

.content-container {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 15px;
    width: 95%;
    max-width: 800px;
    height: calc(95% - 20px);
    margin-top: 20px;
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
    overflow-y: auto;
}

.content-container h2 {
    color: #1a237e;
    margin-bottom: 20px;
    font-weight: 600;
}

.content-container p {
    color: #333;
    line-height: 1.6;
}

.content-next {
    opacity: 0;
    transform: translateX(calc(-50% + 20px));
}

.content-prev {
    opacity: 0;
    transform: translateX(calc(-50% - 20px));
}
```

## public/html/apis.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Management</title>
</head>
<body>
    <div class="api-container">
        <h2 class="api-title">API Management</h2>
        <button id="addApiBtn" class="btn btn-primary mb-3">Add New API</button>
        <div id="apiList"></div>
    </div>

    <!-- Modal for adding/editing API -->
    <div class="modal" id="apiModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="apiModalLabel">Add/Edit API</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="apiForm">
                        <input type="hidden" id="apiId">
                        <div class="form-group">
                            <label for="modelProvider">Model Provider</label>
                            <input type="text" class="form-control" id="modelProvider" required>
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <input type="text" class="form-control" id="description" required>
                        </div>
                        <div class="form-group">
                            <label for="apiKey">API Key</label>
                            <input type="text" class="form-control" id="apiKey" required>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" id="closeBtn">Close</button>
                    <button type="button" class="btn btn-primary" id="saveApiBtn">Save</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

## public/html/apply.html

```html
<div class="apply-container">
    <h2 class="apply-title">Apply Macros</h2>
    <p>Select an input type and choose macros to apply:</p>
    <div class="input-selection">
        <button class="btn btn-outline-primary">Selected Text</button>
        <button class="btn btn-outline-primary">Selected Image</button>
        <button class="btn btn-outline-primary">Clipboard</button>
        <button class="btn btn-outline-primary">Entire Page</button>
        <button class="btn btn-outline-primary">Voice Input</button>
    </div>
    <div class="macro-selection mt-4">
        <h4>Available Macros</h4>
        <ul class="list-group">
            <li class="list-group-item">Summarize</li>
            <li class="list-group-item">Translate</li>
            <li class="list-group-item">Proofread</li>
        </ul>
    </div>
    <button class="btn btn-primary mt-4">Apply Macros</button>
</div>
```

## public/html/macros.html

```html
<div class="build-container">
    <h2 class="build-title">Build Custom Macro</h2>
    <form id="build-macro-form">
        <div class="form-group">
            <label for="macroName">Macro Name</label>
            <input type="text" class="form-control" id="macroName" name="macroName" placeholder="Enter macro name" required>
        </div>
        <div class="form-group">
            <label for="macroDescription">Description</label>
            <textarea class="form-control" id="macroDescription" name="macroDescription" rows="3" placeholder="Describe your macro" required></textarea>
        </div>
        <div class="form-group">
            <label for="promptTemplate">Prompt Template</label>
            <textarea class="form-control" id="promptTemplate" name="promptTemplate" rows="5" placeholder="Enter your prompt template" required></textarea>
        </div>
        <div class="form-group">
            <label for="defaultModel">Default Model</label>
            <select class="form-control" id="defaultModel" name="defaultModel" required>
                <option value="">Choose a model</option>
                <option value="openai">OpenAI</option>
                <option value="anthropic">Anthropic</option>
                <option value="gemini">Gemini</option>
            </select>
        </div>
        <div class="form-group">
            <label for="inputType">Input Type</label>
            <select class="form-control" id="inputType" name="inputType" required>
                <option value="">Select input type</option>
                <option value="text">Selected Text</option>
                <option value="image">Selected Image</option>
                <option value="clipboard">Clipboard</option>
                <option value="page">Entire Page</option>
                <option value="voice">Voice Input</option>
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Create Macro</button>
    </form>
</div>

<script>
document.getElementById('build-macro-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const macroData = Object.fromEntries(formData.entries());
    console.log('Macro Data:', macroData);
    // Here you would typically send this data to your background script or API
    alert('Macro created successfully!');
    this.reset();
});
</script>
```

## public/html/sidepanel.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>AI Macros Sidepanel</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
    <link rel="stylesheet" href="../css/navbar.css">
    <link rel="stylesheet" href="../css/content-container.css">
</head>
<body>
    <section>
        <div class="container-fluid d-flex justify-content-center mt-2">
            <nav class="navbar navbar-expand">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#" data-page="apply" data-text="Apply">
                            <i class="bi bi-lightning-fill icon"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" data-page="chat" data-text="Chat">
                            <i class="bi bi-chat-dots icon"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" data-page="macros" data-text="Macros">
                            <i class="bi bi-tools icon"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" data-page="models" data-text="Models">
                            <i class="bi bi-cpu icon"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" data-page="apis" data-text="API Keys">
                            <i class="bi bi-plug icon"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" data-page="extras" data-text="Extras">
                            <i class="bi bi-stars icon"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
    <section class="content-section">
        <div id="content-container" class="content-container">
            <!-- Dynamic content will be loaded here -->
        </div>
    </section>

    <script src="../../libs/bootstrap.bundle.min.js"></script>
    <script src="../../src/sidepanel.js"></script>
    <script src="../../src/apis.js" type="module"></script>
    <script src="../../src/personal_apis.js" type="module"></script>
    <script src="../../src/default-apis.js" type="module"></script>

</body>
</html>
```

## src/sidepanel.js

```js
document.addEventListener('DOMContentLoaded', () => {
    const contentSection = document.querySelector('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');
    let currentPage = null;

    async function loadContent(page) {
        if (page === currentPage) return;

        try {
            // Load HTML content
            const htmlResponse = await fetch(chrome.runtime.getURL(`../public/html/${page}.html`));
            const newContent = await htmlResponse.text();
            
            // Create a new div for the incoming content
            const newContentDiv = document.createElement('div');
            newContentDiv.innerHTML = newContent;
            newContentDiv.className = 'content-container content-next';
            newContentDiv.id = `${page}-container`;
            
            // Load and apply page-specific CSS
            const cssLink = document.createElement('link');
            cssLink.rel = 'stylesheet';
            cssLink.href = chrome.runtime.getURL(`../public/css/${page}.css`);
            document.head.appendChild(cssLink);
            
            // Add the new content to the DOM
            contentSection.appendChild(newContentDiv);
            
            // Trigger reflow
            void newContentDiv.offsetWidth;
            
            // Start transition
            const currentContent = contentSection.querySelector('.content-container:not(.content-next)');
            if (currentContent) {
                currentContent.classList.add('content-prev');
            }
            newContentDiv.classList.remove('content-next');
            
            // Wait for transition to complete
            setTimeout(() => {
                if (currentContent) {
                    currentContent.remove();
                    // Remove the old page-specific CSS
                    const oldCssLink = document.querySelector(`link[href$="${currentContent.id.replace('-container', '')}.css"]`);
                    if (oldCssLink) {
                        oldCssLink.remove();
                    }
                }
                currentPage = page;

                // Load page-specific JavaScript if needed
                if (page === 'apis') {
                    const script = document.createElement('script');
                    script.src = chrome.runtime.getURL('../src/apis.js');
                    script.type = 'module';
                    document.body.appendChild(script);
                }

                // Dispatch a custom event when content is loaded
                const event = new CustomEvent('contentLoaded', { detail: { page } });
                document.dispatchEvent(event);

            }, 300); // Match this to CSS transition duration
        } catch (error) {
            console.error('Error loading content:', error);
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            loadContent(page);
        });
    });

    // Load initial content (e.g., 'apply' page)
    loadContent('apply');
});
```

## src/background.js

```js
// Bubble handling ---------------------------------------------------------------------------

// Allows users to open the side panel by clicking on the action toolbar icon
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

// Show/hide bubble when tab becomes active/inactive
chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (tab && tab.url && tab.url.startsWith('http')) {
      chrome.tabs.sendMessage(activeInfo.tabId, { action: 'toggleBubble', show: true });
    } else {
      chrome.tabs.sendMessage(activeInfo.tabId, { action: 'toggleBubble', show: false });
    }
  });
});

// Show/hide bubble when URL changes
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab && tab.url) {
    if (tab.url.startsWith('http')) {
      chrome.tabs.sendMessage(tabId, { action: 'toggleBubble', show: true });
    } else {
      chrome.tabs.sendMessage(tabId, { action: 'toggleBubble', show: false });
    }
  }
});

// Open the side panel when the bubble is clicked
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'clickSidePanel') {
    // Ensure this is called directly in response to the user gesture
    chrome.sidePanel.open({ tabId: sender.tab.id }).catch((error) => console.error(error));
  }
});

```

## src/default-apis.js

```js
import { OPENAI_API_KEY } from './personal_apis.js';

const defaultApis = [
    {
        provider: "OpenAI",
        description: "GPT-3.5 and GPT-4 models for natural language processing",
        apiKey: OPENAI_API_KEY,
        dateCreated: "2023-01-15"
    },
    {
        provider: "Anthropic",
        description: "Claude AI models for various language tasks",
        apiKey: "bb",
        dateCreated: "2023-03-22"
    },
    {
        provider: "Google",
        description: "PaLM API for text generation and analysis",
        apiKey: "cc",
        dateCreated: "2023-05-10"
    },
    {
        provider: "Cohere",
        description: "Large language models for text generation and understanding",
        apiKey: "dd",
        dateCreated: "2023-02-28"
    }
  ];
  
  export { defaultApis };
```

## src/apis.js

```js
import { defaultApis } from './default-apis.js';

let apis = [];
let modal;

document.addEventListener('contentLoaded', function(e) {
    if (e.detail.page === 'apis') {
        console.log('APIs page loaded');
        loadAPIs();
    }
});

function loadAPIs() {
    console.log('Loading APIs...');
    chrome.storage.sync.get(['apis'], function(result) {
        if (result.apis && result.apis.length > 0) {
            apis = result.apis;
        } else {
            apis = defaultApis;
            saveAPIs();
        }
        console.log('APIs loaded:', apis);
        renderAPIList();
        setupEventListeners();
    });
}

function setupEventListeners() {
    const addApiBtn = document.getElementById('addApiBtn');
    const saveApiBtn = document.getElementById('saveApiBtn');
    const closeBtn = document.getElementById('closeBtn');
    modal = document.getElementById('apiModal');
    
    if (addApiBtn) {
        console.log('Add API button found');
        addApiBtn.addEventListener('click', addAPI);
    } else {
        console.error('Add API button not found');
    }
    
    if (saveApiBtn) {
        saveApiBtn.addEventListener('click', saveAPI);
    } else {
        console.error('Save API button not found');
    }

    // When the user clicks on the close button, close the modal
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = "none";
        });
    }
    
    // When the user clicks on <span> (x), close the modal
    const span = document.querySelector('.close');
    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function saveAPIs() {
    chrome.storage.sync.set({apis: apis}, function() {
        console.log('APIs saved');
    });
}

function renderAPIList() {
    const apiList = document.getElementById('apiList');
    if (!apiList) return;

    apiList.innerHTML = '';
    apis.forEach((api, index) => {
        const card = document.createElement('div');
        card.className = 'api-card';
        card.innerHTML = `
            <h3>${api.provider}</h3>
            <p>${api.description}</p>
            <p><small>Created: ${api.dateCreated}</small></p>
            <p>API Key: <span class="api-key">****${api.apiKey.slice(-4)}</span></p>
            <button class="btn btn-sm btn-primary edit-btn" data-index="${index}">Edit</button>
            <button class="btn btn-sm btn-danger delete-btn" data-index="${index}">Delete</button>
        `;
        apiList.appendChild(card);
    });

    // Add event listeners for edit and delete buttons
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', (e) => editAPI(e.target.dataset.index));
    });
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => deleteAPI(e.target.dataset.index));
    });
}

function addAPI() {
    if (!modal) {
        console.error('Modal element not found');
        return;
    }
    document.getElementById('apiId').value = '';
    document.getElementById('apiForm').reset();
    document.getElementById('apiModalLabel').textContent = 'Add New API';
    modal.style.display = "block";
    console.log('Add API modal opened');
}

function editAPI(index) {
    const api = apis[index];
    document.getElementById('apiId').value = index;
    document.getElementById('modelProvider').value = api.provider;
    document.getElementById('description').value = api.description;
    document.getElementById('apiKey').value = api.apiKey;
    document.getElementById('apiModalLabel').textContent = 'Edit API';
    modal.style.display = "block";
}

function deleteAPI(index) {
    if (confirm('Are you sure you want to delete this API?')) {
        apis.splice(index, 1);
        saveAPIs();
        renderAPIList();
    }
}

function saveAPI() {
    const id = document.getElementById('apiId').value;
    const api = {
        provider: document.getElementById('modelProvider').value,
        description: document.getElementById('description').value,
        apiKey: document.getElementById('apiKey').value,
        dateCreated: id === '' ? new Date().toISOString().split('T')[0] : apis[parseInt(id)].dateCreated
    };

    if (id === '') {
        apis.push(api);
    } else {
        apis[parseInt(id)] = api;
    }

    saveAPIs();
    renderAPIList();
    modal.style.display = "none";
}
```

## src/content.js

```js
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
```

## Excluded Files

- **libs/bootstrap.bundle.min.js**: This file is present, but its content was not captured in this list for brevity.
- **src/personal_apis.js**: This file is present, but its content was not captured in this list for brevity.
