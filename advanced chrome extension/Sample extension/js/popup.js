var items;

init()

async function init(){
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, new ExtensionMessage(config.keys.getContentMessage, {message: "Data to content"}));
    });

    chrome.runtime.sendMessage(new ExtensionMessage(config.keys.getBackgroundMessage, {message: "Data to background"}))
}

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    switch(message.context){
        case config.keys.getPopupMessage:
            console.log(message.data);
            break;
    }
});
