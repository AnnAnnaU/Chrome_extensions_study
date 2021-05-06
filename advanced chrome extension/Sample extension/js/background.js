chrome.runtime.onMessage.addListener(
    function (message, sender) {
        executeFunction(message.context, { message, sender });
    }
);

var extensionValue = "Test value";

async function getBackgroundInfo({ message, sender }) {
    //For popup response
    chrome.extension.sendMessage(new ExtensionMessage(message.context, { extensionValue }));

    //for Content script response
    sendPageMessage(new ExtensionMessage(message.context, { extensionValue }), sender.tab.id);
};

async function getBackgroundMessage({ message, sender }) {
    console.log(message.data)
    chrome.extension.sendMessage(new ExtensionMessage(config.keys.getPopupMessage, { message: "Data to popup" }))
};



async function requestBackground({ message, sender }) {
    console.log(message.data);
    console.log(Object.values(message.data));
    sendPageMessage(new ExtensionMessage(message.context, { message: Object.values(message.data) / 2 }), sender.tab.id)
};
