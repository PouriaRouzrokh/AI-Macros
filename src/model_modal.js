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

    // Populate API select options
    apis.forEach(api => {
        const option = document.createElement('option');
        option.value = api.name;
        option.textContent = api.name;
        apiSelect.appendChild(option);
    });

    // If editing, populate form with existing data
    if (modelData.model) {
        document.getElementById('modelId').value = modelIndex;
        document.getElementById('modelName').value = modelData.model.name;
        document.getElementById('description').value = modelData.model.description;
        document.getElementById('apiName').value = modelData.model.apiName;
        document.getElementById('systemPrompt').value = modelData.model.systemPrompt;
        document.getElementById('curlCommand').value = modelData.model.curl_command;
        document.getElementById('responseParser').value = modelData.model.responseParser;
    }

    closeBtn.addEventListener('click', () => window.close());
    cancelBtn.addEventListener('click', () => window.close());

    saveBtn.addEventListener('click', () => {
        if (form.checkValidity()) {
            const model = {
                name: document.getElementById('modelName').value,
                description: document.getElementById('description').value,
                apiName: document.getElementById('apiName').value,
                systemPrompt: document.getElementById('systemPrompt').value,
                curl_command: document.getElementById('curlCommand').value,
                responseParser: document.getElementById('responseParser').value,
                dateCreated: modelData.model ? modelData.model.dateCreated : new Date().toISOString().split('T')[0]
            };

            chrome.runtime.sendMessage({
                action: 'saveModel',
                data: { model, index: modelIndex }
            });

            window.close();
        } else {
            form.reportValidity();
        }
    });

    // Auto-resize textareas
    const autoResizeTextareas = document.querySelectorAll('.auto-resize');
    autoResizeTextareas.forEach(textarea => {
        textarea.addEventListener('input', autoResize);
        // Initial resize
        autoResize.call(textarea);
    });
});

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}