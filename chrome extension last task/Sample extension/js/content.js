init();

async function init() {
  let prise = await elementAppear("#anonCarousel1 > ol > li:nth-child(3) > div > div > div:nth-child(6) > div > a > span:nth-child(1) > span:nth-child(2) > span.a-price-whole");
  let priceSymbol = document.querySelector("#anonCarousel1 > ol > li:nth-child(3) > div > div > div:nth-child(6) > div > a > span:nth-child(1) > span:nth-child(2) > span.a-price-symbol")
  priceSymbol.innerText = 'gbp';

  let result = await requestBackground(new ExtensionMessage(config.keys.requestBackground, { message: `${+/\d+/.exec(prise.innerText)}` }))
  console.log(result);
  prise.innerText = Object.values(result);
}

