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

async function requestBackground({ message, sender }) {
    console.log(message.data);
    console.log(Object.values(message.data));
    sendPageMessage(new ExtensionMessage(message.context, { message: ((Object.values(message.data) * rates.USD) / rates.GBP).toFixed(0) }), sender.tab.id)
};

const rates = {};

async function getCurrencies() {
    const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
    const data = await response.json();
    const result = await data;
    rates.USD = result.Valute.USD.Value;
    rates.GBP = result.Valute.GBP.Value;
}


init()

async function init() {
    getCurrencies();

    $.ajax({
        type: "GET",
        url: "https://www.cbr-xml-daily.ru/daily_json.js",
        dataType: "json",
        success: result => {
            console.log(result);
        },
        error: result => {
            console.log(result);
        },
    });
}