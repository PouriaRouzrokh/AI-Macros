import { defaultApis } from './data/api_examples.js';

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
