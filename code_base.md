## public/css/apply.css

```css

```

## public/css/macros.css

```css

```

## public/css/sidepanel.css

```css
:root {
    --navbar-scale: 0.7;
    --navbar-item-size: calc(80px * var(--navbar-scale));
    --navbar-font-size: calc(16px * var(--navbar-scale));
    --navbar-icon-size: calc(28px * var(--navbar-scale));
    --secondary-color: #1a237e;
    --primary-color: #4a90e2;
    --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --accent-color: #e74c3c;
    --active-color: lightblue;
    --background-color: #f0f4f8;
}

body, html {
    height: 100%;
    margin: 0;
    padding: 0;
}

.main-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: var(--background-color);
}

.navbar-section {
    padding: 10px 0;
}

.content-section {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    position: relative;
    padding: 10px;
}

.content-container {
    background-color: white;
    border-radius: 0px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 15px;
    width: 95%;
    max-width: 800px;
    height: calc(100% - 20px);
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 10px;
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

.navbar {
    background-color: var(--primary-color) !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 0px;
    padding: 0px 5px 0px 5px;
    box-shadow: var(--box-shadow);
}

.navbar-nav {
    display: flex;
    flex-direction: row;
}

.nav-item {
    width: var(--navbar-item-size);
    height: var(--navbar-item-size);
    transition: transform 0.3s ease;
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
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.nav-link.active {
    border-bottom: 3px solid var(--accent-color);
    transform: scale(1.05);
}

.nav-link:hover {
    background-color: var(--accent-color);
    transform: scale(1.0);
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

## public/css/models.css

```css
:root {
    --primary-color: #4a90e2;
    --secondary-color: #2ecc71;
    --background-color: #ecf0f1;
    --text-color: #2c3e50;
    --accent-color: #e74c3c;
    --border-radius: 10px;
    --box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    --font-family: 'Open Sans', sans-serif;
}

.model-container {
    padding: 20px;
    background-color: var(--background-color);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    font-family: var(--font-family);
}

.model-instance-title {
    color: var(--primary-color);
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}

.model-card {
    background-color: white;
    border: 1px solid #e0e0e0;
    border-radius: var(--border-radius);
    padding: 15px;
    margin-bottom: 15px;
    box-shadow: var(--box-shadow);
}

.model-card h3 {
    color: var(--primary-color);
    font-size: 20px;
    margin-bottom: 10px;
}

.model-card p {
    color: var(--text-color);
    font-size: 14px;
    margin-bottom: 5px;
}

.btn-add-model, .edit-btn, .delete-btn, .duplicate-btn {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: var(--border-radius);
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease, transform 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn-add-model:hover, .edit-btn:hover, .delete-btn:hover, .duplicate-btn:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
}

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
    align-items: center;
    justify-content: center;
    font-family: var(--font-family);
}

.modal-content {
    background-color: white;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    color: var(--text-color);
}

.form-group input[type="text"],
.form-group textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
}

.form-group textarea {
    height: 100px;
    resize: vertical;
}
```

## public/css/modals.css

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.modal-wrapper {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    width: 90%;
    animation: modalFadeIn 0.3s ease-out;
}

@keyframes modalFadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.modal-content {
    display: flex;
    flex-direction: column;
}

.modal-header {
    background-color: #f8f9fa;
    border-bottom: 1px solid #e9ecef;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.model-instance-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #212529;
    margin: 0;
}

.modal-body {
    padding: 1.5rem;
}

.modal-footer {
    border-top: 1px solid #e9ecef;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
}

.form-label {
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #495057;
}

.form-control {
    border: 1px solid #ced4da;
    border-radius: 4px;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.btn {
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
}

.btn-primary:hover {
    color: #fff;
    background-color: #0056b3;
    border-color: #0056b3;
}

.btn-secondary {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
}

.btn-secondary:hover {
    color: #fff;
    background-color: #5a6268;
    border-color: #545b62;
}

.btn-close {
    background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
    border: 0;
    border-radius: 0.25rem;
    opacity: .5;
    padding: 0.25rem 0.25rem;
}

.btn-close:hover {
    opacity: .75;
}

.auto-resize {
    overflow: hidden;
    resize: none;
    min-height: 60px;
    max-height: 300px;
}
```

## public/css/apis.css

```css
:root {
    --primary-color: #4a90e2;
    --secondary-color: #2ecc71;
    --background-color: #ecf0f1;
    --text-color: #2c3e50;
    --accent-color: #e74c3c;
    --border-radius: 10px;
    --box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    --font-family: 'Open Sans', sans-serif;
}

/* API Container Styles */
.api-container {
    padding: 20px;
    background-color: var(--background-color);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    font-family: var(--font-family);
}

.api-title {
    color: var(--primary-color);
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}

/* API Card Styles */
.api-card {
    background-color: white;
    border: 1px solid #e0e0e0;
    border-radius: var(--border-radius);
    padding: 15px;
    margin-bottom: 15px;
    box-shadow: var(--box-shadow);
}

.api-card h3 {
    color: var(--primary-color);
    font-size: 20px;
    margin-bottom: 10px;
}

.api-card p {
    color: var(--text-color);
    font-size: 14px;
    margin-bottom: 5px;
}

.api-key {
    font-family: monospace;
    background-color: #f5f5f5;
    padding: 2px 4px;
    border-radius: 2px;
}

/* Button Styles */
.btn-add-api, .edit-btn, .delete-btn {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: var(--border-radius);
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease, transform 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn-add-api:hover, .edit-btn:hover, .delete-btn:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
}

/* Modal Styles */
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
    align-items: center;
    justify-content: center;
    font-family: var(--font-family);
}

.modal-content {
    background-color: white;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

```

## public/css/chat.css

```css

```

## public/css/options.css

```css

```

## public/html/home.html

```html
<html>  </html>
<head>
    <title>AI Macros Home</title>
</head>
<body>
    <h1 style="text-align: center; font-size: 30px; margin-top: 20px; margin-bottom: 20px; font-weight: bold; color: #007bff;">Welcome to AI Macros!</h1>
    <h2 style="text-align: center; font-size: 100px; color: #007bff;"><i class="bi bi-robot"></i></h2>
</body>

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
</body>
</html>
```

## public/html/apply.html

```html

```

## public/html/model_modal.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Model Modal</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../css/modals.css">
</head>
<body>
    <div class="modal-wrapper">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="model-instance-title" id="modelModalLabel">Add/Edit Model</h5>
                <button type="button" class="btn-close" id="closeBtn" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="modelForm">
                    <input type="hidden" id="modelId">
                    <div class="mb-3">
                        <label for="modelInstanceName" class="form-label">Model Name</label>
                        <input type="text" class="form-control" id="modelInstanceName" required>
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">Description</label>
                        <textarea class="form-control auto-resize" id="description" rows="3" required></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="apiName" class="form-label">API Name</label>
                        <select class="form-select" id="apiName" required>
                            <option value="">Select an API</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="systemPrompt" class="form-label">System Prompt</label>
                        <textarea class="form-control auto-resize" id="systemPrompt" rows="3" required></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="curlCommand" class="form-label">Curl Command</label>
                        <textarea class="form-control auto-resize" id="curlCommand" rows="5" required></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="responseParser" class="form-label">Response Parser</label>
                        <input type="text" class="form-control" id="responseParser" required>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" id="cancelBtn">Cancel</button>
                <button type="button" class="btn btn-primary" id="saveModelBtn">Save</button>
            </div>
        </div>
    </div>

    <script src="../../src/model_modal.js"></script>
</body>
</html>
```

## public/html/macros.html

```html

```

## public/html/api_modal.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Modal</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../css/modals.css">
</head>
<body>
    <div class="modal-wrapper">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="model-instance-title" id="apiModalLabel">Add/Edit API</h5>
                <button type="button" class="btn-close" id="closeBtn" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="apiForm">
                    <input type="hidden" id="apiId">
                    <div class="mb-3">
                        <label for="apiName" class="form-label">API Name</label>
                        <input type="text" class="form-control" id="apiName" required>
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">Description</label>
                        <textarea class="form-control auto-resize" id="description" rows="3" required></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="apiKey" class="form-label">API Key</label>
                        <input type="text" class="form-control" id="apiKey" required>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" id="cancelBtn">Cancel</button>
                <button type="button" class="btn btn-primary" id="saveApiBtn">Save</button>
            </div>
        </div>
    </div>

    <script src="../../src/api_modal.js"></script>
</body>
</html>
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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="../css/sidepanel.css">
</head>
<body>
    <div class="main-container">
        <section class="navbar-section">
            <div class="container-fluid d-flex justify-content-center mt-2">
                <nav class="navbar navbar-expand">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#" data-page="macros" data-text="Macros">
                                <i class="bi bi-rewind-circle-fill icon"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" data-page="chat" data-text="Chat">
                                <i class="bi bi-chat-dots icon"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" data-page="agents" data-text="Agents">
                                <i class="bi bi-robot icon"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" data-page="models" data-text="Models">
                                <i class="bi bi-cpu icon"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" data-page="apis" data-text="APIs">
                                <i class="bi bi-key-fill icon"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" data-page="home" data-text="Home">
                                <i class="bi bi-house-gear-fill icon"></i>
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
    </div>

    <script src="../../libs/bootstrap.bundle.min.js"></script>
    <script src="../../src/sidepanel.js"></script>
    <script src="../../src/apis.js" type="module"></script>
    <script src="../../src/templates/personal_apis.js" type="module"></script>
    <script src="../../src/templates/api_templates.js" type="module"></script>
    <script src="../../src/models.js" type="module"></script>
    <script src="../../src/templates/model_templates.js" type="module"></script>

</body>
</html>
```

## public/html/models.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Model Instances</title>
</head>
<body>
    <div class="model-container">
        <h2 class="model-instance-title">Model Instances</h2>
        <button id="addModelBtn" class="btn btn-primary mb-3">Add New Model Instance</button>
        <div id="modelList"></div>
    </div>
</body>
</html>
```

## public/html/chat.html

```html

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
                } else if (page === 'models') {
                    const script = document.createElement('script');
                    script.src = chrome.runtime.getURL('../src/models.js');
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
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
            const page = link.getAttribute('data-page');
            loadContent(page);
        });
    });

    // Load initial content (e.g., 'apply' page)
    const initial_page = 'home';
    loadContent(initial_page);
    document.querySelector('.nav-link[data-page="' + initial_page + '"]').classList.add('active');
});
```

## src/background.js

```js
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (tab && tab.url && tab.url.startsWith('http')) {
      chrome.tabs.sendMessage(activeInfo.tabId, { action: 'toggleBubble', show: true });
    } else {
      chrome.tabs.sendMessage(activeInfo.tabId, { action: 'toggleBubble', show: false });
    }
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab && tab.url) {
    if (tab.url.startsWith('http')) {
      chrome.tabs.sendMessage(tabId, { action: 'toggleBubble', show: true });
    } else {
      chrome.tabs.sendMessage(tabId, { action: 'toggleBubble', show: false });
    }
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'clickSidePanel') {
    chrome.sidePanel.open({ tabId: sender.tab.id }).catch((error) => console.error(error));
  } else if (request.action === 'openModal') {
    openModal(request.modalType, request.data);
  } else if (request.action === 'saveAPI' || request.action === 'saveModel') {
    // Forward the message to the appropriate content script
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, request);
      }
    });
  }
  return true; // Indicates that the response will be sent asynchronously
});

function openModal(modalType, data) {
  const modalUrl = chrome.runtime.getURL(`public/html/${modalType}_modal.html`);
  const popupWidthPercentage = 0.8;
  const popupHeightPercentage = 0.9;

  chrome.windows.getCurrent({ populate: true }, (currentWindow) => {
    const popupWidth = Math.round(currentWindow.width * popupWidthPercentage);
    const popupHeight = Math.round(currentWindow.height * popupHeightPercentage);
    const left = Math.round((currentWindow.width - popupWidth) / 2 + currentWindow.left);
    const top = Math.round((currentWindow.height - popupHeight) / 2 + currentWindow.top);

    const windowOptions = {
      url: `${modalUrl}?data=${encodeURIComponent(JSON.stringify(data || {}))}`,
      type: 'popup',
      width: popupWidth,
      height: popupHeight,
      left: left,
      top: top
    };

    chrome.windows.create(windowOptions, (window) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      }
    });
  });
}
```

## src/models.js

```js
import { defaultModels } from './templates/model_templates.js';

let models = [];
let apis = [];

document.addEventListener('contentLoaded', function(e) {
    if (e.detail.page === 'models') {
        console.log('Model page loaded');
        loadModels();
        loadAPIs();
        setupEventListeners();
    }
});

function loadModels() {
    console.log('Loading Models...');
    chrome.storage.local.get(['models'], function(result) {
        if (result.models && result.models.length > 0) {
            models = result.models;
        } else {
            models = defaultModels;
            saveModels();
        }
        console.log('Models loaded:', models);
        renderModelList();
    });
}

function loadAPIs() {
    chrome.storage.sync.get(['apis'], function(result) {
        if (result.apis && result.apis.length > 0) {
            apis = result.apis;
        } else {
            console.log('No APIs found');
            apis = []; // Ensure apis is always an array
        }
    });
}

function setupEventListeners() {
    const addModelBtn = document.getElementById('addModelBtn');
    
    if (addModelBtn) {
        console.log('Add Model button found');
        addModelBtn.addEventListener('click', addModel);
    } else {
        console.error('Add Model button not found');
    }
    
    // Listen for API updates
    document.addEventListener('apisUpdated', function() {
        loadAPIs();
    });
}

function saveModels() {
    chrome.storage.local.set({models: models}, function() {
        console.log('Models saved');
    });
}

function renderModelList() {
    const modelList = document.getElementById('modelList');
    if (!modelList) return;

    modelList.innerHTML = '';
    models.forEach((model, index) => {
        const card = document.createElement('div');
        card.className = 'model-card';
        card.innerHTML = `
            <h3>${model.name}</h3>
            <p>${model.description}</p>
            <p><small>Created: ${model.dateCreated}</small></p>
            <div class="button-group">
                <button class="btn btn-sm btn-primary edit-btn" data-index="${index}">Edit</button>
                <button class="btn btn-sm btn-primary duplicate-btn" data-index="${index}">Duplicate</button>
                <button class="btn btn-sm btn-danger delete-btn" data-index="${index}">Delete</button>
            </div>
        `;
        modelList.appendChild(card);
    });

    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', (e) => editModel(e.target.dataset.index));
    });
    document.querySelectorAll('.duplicate-btn').forEach(btn => {
        btn.addEventListener('click', (e) => duplicateModel(e.target.dataset.index));
    });
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => deleteModel(e.target.dataset.index));
    });
}

function addModel() {
    chrome.runtime.sendMessage({
        action: 'openModal',
        modalType: 'model',
        data: { apis: apis }
    });
}

function editModel(index) {
    const model = models[index];
    chrome.runtime.sendMessage({
        action: 'openModal',
        modalType: 'model',
        data: { model, index, apis: apis }
    });
}

function duplicateModel(index) {
    const originalModel = models[index];
    const duplicatedModel = {...originalModel};
    duplicatedModel.name = `${originalModel.name}_copy`;
    duplicatedModel.dateCreated = new Date().toISOString().split('T')[0];
    
    models.push(duplicatedModel);
    saveModels();
    renderModelList();
}

function deleteModel(index) {
    if (confirm('Are you sure you want to delete this Model?')) {
        models.splice(index, 1);
        saveModels();
        renderModelList();
    }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'saveModel') {
        const { model, index } = request.data;
        if (index === undefined) {
            models.push(model);
        } else {
            models[index] = model;
        }
        saveModels();
        renderModelList();
        sendResponse({success: true});
    } else if (request.action === 'refreshList' && request.listType === 'model') {
        loadModels();
    }
    return true; // Indicates that the response will be sent asynchronously
});
```

## src/model_modal.js

```js
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const modelData = JSON.parse(decodeURIComponent(urlParams.get('data')));
    const apis = modelData.apis;
    let modelIndex = modelData.index;

    const form = document.getElementById('modelForm');
    const apiSelect = document.getElementById('apiName');
    const closeBtn = document.getElementById('closeBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const saveBtn = document.getElementById('saveModelBtn');

    apis.forEach(api => {
        const option = document.createElement('option');
        option.value = api.name;
        option.textContent = api.name;
        apiSelect.appendChild(option);
    });

    if (modelData.model) {
        document.getElementById('modelId').value = modelIndex;
        document.getElementById('modelInstanceName').value = modelData.model.name;
        document.getElementById('description').value = modelData.model.description;
        document.getElementById('apiName').value = modelData.model.apiName;
        document.getElementById('curlCommand').value = modelData.model.curl_command;
        document.getElementById('responseParser').value = modelData.model.responseParser;
    }

    closeBtn.addEventListener('click', () => window.close());
    cancelBtn.addEventListener('click', () => window.close());

    saveBtn.addEventListener('click', () => {
        if (form.checkValidity()) {
            const model = {
                name: document.getElementById('modelInstanceName').value,
                description: document.getElementById('description').value,
                apiName: document.getElementById('apiName').value,
                curl_command: document.getElementById('curlCommand').value,
                responseParser: document.getElementById('responseParser').value,
                dateCreated: modelData.model ? modelData.model.dateCreated : new Date().toISOString().split('T')[0]
            };

            saveBtn.disabled = true;
            saveBtn.textContent = 'Saving...';

            chrome.runtime.sendMessage({
                action: 'saveModel',
                data: { model, index: modelIndex }
            }, (response) => {
                if (chrome.runtime.lastError) {
                    console.error(chrome.runtime.lastError);
                    alert('Error saving model. Please try again.');
                    saveBtn.disabled = false;
                    saveBtn.textContent = 'Save';
                } else {
                    console.log('Model saved successfully');
                    window.close();
                }
            });
        } else {
            form.reportValidity();
        }
    });

    const autoResizeTextareas = document.querySelectorAll('.auto-resize');
    autoResizeTextareas.forEach(textarea => {
        textarea.addEventListener('input', autoResize);
        autoResize.call(textarea);
    });
});

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}
```

## src/api_modal.js

```js
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const apiData = JSON.parse(decodeURIComponent(urlParams.get('data')));
    let apiIndex = apiData.index;

    const form = document.getElementById('apiForm');
    const closeBtn = document.getElementById('closeBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const saveBtn = document.getElementById('saveApiBtn');

    if (apiData.api) {
        document.getElementById('apiId').value = apiIndex;
        document.getElementById('apiName').value = apiData.api.name;
        document.getElementById('description').value = apiData.api.description;
        document.getElementById('apiKey').value = apiData.api.apiKey;
    }

    closeBtn.addEventListener('click', () => window.close());
    cancelBtn.addEventListener('click', () => window.close());

    saveBtn.addEventListener('click', () => {
        if (form.checkValidity()) {
            const api = {
                name: document.getElementById('apiName').value,
                description: document.getElementById('description').value,
                apiKey: document.getElementById('apiKey').value,
                dateCreated: apiData.api ? apiData.api.dateCreated : new Date().toISOString().split('T')[0]
            };

            saveBtn.disabled = true;
            saveBtn.textContent = 'Saving...';

            chrome.runtime.sendMessage({
                action: 'saveAPI',
                data: { api, index: apiIndex }
            }, (response) => {
                if (chrome.runtime.lastError) {
                    console.error(chrome.runtime.lastError);
                    alert('Error saving API. Please try again.');
                    saveBtn.disabled = false;
                    saveBtn.textContent = 'Save';
                } else {
                    console.log('API saved successfully');
                    window.close();
                }
            });
        } else {
            form.reportValidity();
        }
    });

    const autoResizeTextareas = document.querySelectorAll('.auto-resize');
    autoResizeTextareas.forEach(textarea => {
        textarea.addEventListener('input', autoResize);
        autoResize.call(textarea);
    });
});

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}
```

## src/apis.js

```js
import { defaultApis } from './templates/api_templates.js';

let apis = [];

document.addEventListener('contentLoaded', function(e) {
    if (e.detail.page === 'apis') {
        console.log('API page loaded');
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
    
    if (addApiBtn) {
        console.log('Add API button found');
        addApiBtn.addEventListener('click', addAPI);
    } else {
        console.error('Add API button not found');
    }
}

function saveAPIs() {
    chrome.storage.sync.set({apis: apis}, function() {
        console.log('APIs saved');
        updateModelForm();
    });
}

function updateModelForm() {
    const event = new CustomEvent('apisUpdated');
    document.dispatchEvent(event);
}

function renderAPIList() {
    const apiList = document.getElementById('apiList');
    if (!apiList) return;

    apiList.innerHTML = '';
    apis.forEach((api, index) => {
        const card = document.createElement('div');
        card.className = 'api-card';
        card.innerHTML = `
            <h3>${api.name}</h3>
            <p>${api.description}</p>
            <p><small>Created: ${api.dateCreated}</small></p>
        `;
        
        // Add buttons only if the className is not "AI Macros"
        if (api.name !== "AI Macros") {
            card.innerHTML += `
                <button class="btn btn-sm btn-primary edit-btn" data-index="${index}">Edit</button>
                <button class="btn btn-sm btn-danger delete-btn" data-index="${index}">Delete</button>
            `;
        }

        apiList.appendChild(card);
    });

    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', (e) => editAPI(e.target.dataset.index));
    });
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => deleteAPI(e.target.dataset.index));
    });
}

function addAPI() {
    chrome.runtime.sendMessage({
        action: 'openModal',
        modalType: 'api',
        data: {}
    });
}

function editAPI(index) {
    const api = apis[index];
    chrome.runtime.sendMessage({
        action: 'openModal',
        modalType: 'api',
        data: { api, index }
    });
}

function deleteAPI(index) {
    if (confirm('Are you sure you want to delete this API?')) {
        apis.splice(index, 1);
        saveAPIs();
        renderAPIList();
    }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'saveAPI') {
        const { api, index } = request.data;
        if (index === undefined) {
            apis.push(api);
        } else {
            apis[index] = api;
        }
        saveAPIs();
        renderAPIList();
        sendResponse({success: true});
    } else if (request.action === 'refreshList' && request.listType === 'api') {
        loadAPIs();
    }
    return true; // Indicates that the response will be sent asynchronously
});

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

## src/templates/model_templates.js

```js
const defaultModels = [
    {
        name: "OpenAI/GPT-4o",
        description: "Base GPT-4o LLM by OpenAI",
        apiName: "AI Macros",
        curl_command: `curl https://api.openai.com/v1/chat/completions \\
            -H "Content-Type: application/json" \\
            -H "Authorization: Bearer $$apiName$$" \\
            -d '{
                "model": "$$modelInstanceName$$",
                "messages": [{"role": "system", "content": "$$systemPrompt$$"},{"role": "user", "content": "$$userPrompt$$"}],
                "temperature": $$temperature$$
            }'`,
        responseParser: "choices.0.message.content",
        dateCreated: "2023-01-15"
    }
  ];
  
  export { defaultModels };
```

## src/templates/api_templates.js

```js
import { OPENAI_API_KEY } from './personal_apis.js';

const defaultApis = [
    {
        name: "AI Macros",
        description: "Your AI Macros API key.",
        apiKey: "SAMPLE_AI_MACROS_API_KEY",
        dateCreated: "2024-01-01"
    },
    {
        name: "OpenAI",
        description: "Edit to enter your API key.",
        apiKey: OPENAI_API_KEY,
        dateCreated: "2023-01-15"
    },
    {
        name: "Anthropic",
        description: "Edit to enter your API key.",
        apiKey: "????",
        dateCreated: "2023-03-22"
    },
    {
        name: "Google",
        description: "Edit to enter your API key.",
        apiKey: "????",
        dateCreated: "2023-05-10"
    }
  ];
  
  export { defaultApis };
```

## Excluded Files

- **libs/bootstrap.bundle.min.js**: This file is present, but its content was not captured in this list for brevity.
- **src/templates/personal_apis.js**: This file is present, but its content was not captured in this list for brevity.
