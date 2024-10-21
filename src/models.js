import { defaultModels } from './data/model_examples.js';

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