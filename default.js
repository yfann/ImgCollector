chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(null, { file: 'jquery-1.4.1.min.js', allFrames: true });
    chrome.tabs.executeScript(null, { file: 'float.js' });
    chrome.tabs.executeScript(null, { file: 'contentscript.js', allFrames: true });
});