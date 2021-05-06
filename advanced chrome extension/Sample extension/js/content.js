init();

async function init() {
    let prise = await elementAppear("#anonCarousel1 > ol > li:nth-child(3) > div > div > div:nth-child(6) > div > a > span:nth-child(1) > span:nth-child(2) > span.a-price-whole");
    console.log(+/\d+/.exec(prise.innerText));

    chrome.runtime.sendMessage(new ExtensionMessage(config.keys.getBackgroundMessage, { message: "Data to background" }))

    let result = await requestBackground(new ExtensionMessage(config.keys.requestBackground, { message: `${+/\d+/.exec(prise.innerText)}` }))
    console.log(result);
    prise.innerText = Object.values(result);
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    switch (message.context) {
        case config.keys.getContentMessage:
            console.log(message.data);
            break;
    }
});
