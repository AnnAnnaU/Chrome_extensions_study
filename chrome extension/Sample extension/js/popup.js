var items;

// login popup
const loginPopup = document.querySelector(".login-popup");
const loading = document.querySelector(".loading");

window.addEventListener("load", function () {
  // showPopup();

  // first way to show Popup
  setTimeout(function () {
    loginPopup.classList.add("show");
    loading.classList.add("hide");
  }, 1000)
})

// second way to show Popup

// function showPopup() {
//   const timeLimit = 1;
//   let i = 0;
//   const timer = setInterval(function () {
//     i++;
//     if (i === timeLimit) {
//       clearInterval(timer);
//       loginPopup.classList.add("show");
//       loading.classList.add("hide");
//     }
//     console.log(i);
//   }, 1000)
// }

closeForm.addEventListener("click", function () {
  loginPopup.classList.remove("show");
})

init()

async function init() {

}
