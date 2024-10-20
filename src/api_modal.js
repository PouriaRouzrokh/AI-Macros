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