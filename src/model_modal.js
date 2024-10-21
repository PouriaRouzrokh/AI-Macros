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
                } else if (response && response.success) {
                    console.log('Model saved successfully');
                    chrome.runtime.sendMessage({ action: 'refreshList', listType: 'model' });
                    window.close();
                } else {
                    console.error('Unexpected response:', response);
                    alert('Error saving model. Please try again.');
                    saveBtn.disabled = false;
                    saveBtn.textContent = 'Save';
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