import { defaultApis } from './templates/api_templates.js';

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