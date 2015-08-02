var duplicateTab = function(info, tab) {
  chrome.tabs.duplicate(tab.id);
};

chrome.contextMenus.create({
  "title": "Duplicate Tab",
  "contexts": ["page"],
  "id": "duplicateCommand"
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  duplicateTab(info,tab);
});

// chrome.commands.onCommand.addListener(function(command) {
//   console.log('onCommand event received for message: ', command);
// });
