const url = window.location.href.split("?")[1];
const newUser = decodeURIComponent(url).split(",");
const userName = document.getElementById("username");
const email = document.getElementById("email");

userName.textContent = `${newUser[0]} ${newUser[1]}`;
email.textContent = `${newUser[2]}`;
