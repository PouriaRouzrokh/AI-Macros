document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const apiData = JSON.parse(decodeURIComponent(urlParams.get('data')));
    let apiIndex = apiData.index;

    const form = document.getElementById('apiForm');
    const closeBtn = document.getElementById('closeBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const saveBtn = document.getElementById('saveApiBtn');

    // If editing, populate form with existing data
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

            chrome.runtime.sendMessage({
                action: 'saveAPI',
                data: { api, index: apiIndex }
            });

            window.close();
        } else {
            form.reportValidity();
        }
    });
});