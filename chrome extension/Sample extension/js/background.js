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

const start = new Date().getTime();
chrome.runtime.onInstalled.addListener((details) => {
    chrome.tabs.create({ url: "https://www.google.com?installed-true" })
    const end = new Date().getTime();
    chrome.runtime.setUninstallURL(`https://www.google.com?seconds-${(end - start) / 1000}`)
})


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log(changeInfo);
    console.log(tab);
})



