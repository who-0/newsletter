const url = window.location.href.split("?")[1];
const newUser = decodeURIComponent(url).split(",");
const userName = document.getElementById("username");
const email = document.getElementById("email");

userName.textContent = `${newUser[0]} ${newUser[1]}`;
email.textContent = `${newUser[2]}`;

//!----------------------- loader
window.addEventListener("load", function () {
  const loading = document.getElementsByClassName("loading");
  loading[0].classList.remove("show");
  loading[0].classList.add("hidden");
});
// window.addEventListener("DOMContentLoaded", function () {
//   const loading = document.getElementsByClassName("loading");
//   loading[0].classList.add("hidden");
//   loading[0].classList.remove("show");
// });
