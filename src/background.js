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
    const modalUrl = chrome.runtime.getURL(`public/html/${request.modalType}_modal.html`);
    const windowOptions = {
      url: `${modalUrl}?data=${encodeURIComponent(JSON.stringify(request.data || {}))}`,
      type: 'popup',
      width: 600,
      height: 600
    };
    chrome.windows.create(windowOptions, (window) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      }
    });
  }
});