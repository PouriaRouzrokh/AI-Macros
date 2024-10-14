/******/ (() => { // webpackBootstrap
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
// Bubble handling ---------------------------------------------------------------------------

// Show/hide bubble when tab becomes active/inactive
chrome.tabs.onActivated.addListener(function (activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function (tab) {
    if (tab && tab.url && tab.url.startsWith('http')) {
      chrome.tabs.sendMessage(activeInfo.tabId, {
        action: 'toggleBubble',
        show: true
      });
    } else {
      chrome.tabs.sendMessage(activeInfo.tabId, {
        action: 'toggleBubble',
        show: false
      });
    }
  });
});

// Show/hide bubble when URL changes
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab && tab.url) {
    if (tab.url.startsWith('http')) {
      chrome.tabs.sendMessage(tabId, {
        action: 'toggleBubble',
        show: true
      });
    } else {
      chrome.tabs.sendMessage(tabId, {
        action: 'toggleBubble',
        show: false
      });
    }
  }
});

// Allows users to open the side panel by clicking on the action toolbar icon
chrome.sidePanel.setPanelBehavior({
  openPanelOnActionClick: true
})["catch"](function (error) {
  return console.error(error);
});

// Open the side panel when the bubble is clicked
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'clickSidePanel') {
    chrome.sidePanel.open({
      tabId: sender.tab.id
    });
  }
});
/******/ })()
;
//# sourceMappingURL=background.js.map