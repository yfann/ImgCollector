chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(null, { file: 'jquery.js', allFrames: true });
    chrome.tabs.executeScript(null, { file: 'float.js' });
	chrome.tabs.executeScript(null, { file: 'base.js' });
    chrome.tabs.executeScript(null, { file: 'contentscript.js', allFrames: true });
});