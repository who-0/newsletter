const url = window.location.href.split("?")[1];

const newUser = decodeURIComponent(url).split(",");
if (newUser.length === 1) {
  const message = document.getElementById("message");

  message.innerHTML = `${newUser[0]}`;
} else {
  const userName = document.getElementById("username");

  userName.textContent = `${newUser[0]} ${newUser[1]}`;
}

//!----------------------- loader
window.addEventListener("loadstart", function () {
  const loading = document.getElementsByClassName("loading");
  loading[0].classList.add("show");
  loading[0].classList.remove("hidden");
});
window.addEventListener("DOMContentLoaded", function () {
  const loading = document.getElementsByClassName("loading");
  loading[0].classList.add("hidden");
  loading[0].classList.remove("show");
});
