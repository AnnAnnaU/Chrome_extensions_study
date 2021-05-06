init();

async function init() {
    // let testElement = document.querySelector("span[_ngcontent-app-root-c197]")
    let testElement = await elementAppear("ul.pv-top-card--list.inline-flex.align-items-center > li");
    console.log(testElement.innerText + " Just for test");
}
