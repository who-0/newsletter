const url = window.location.href.split("?")[1];

const newUser = decodeURIComponent(url).split(",");
if (newUser.length === 1) {
  const message = document.getElementById("message");

  message.innerHTML = `${newUser[0]}`;
} else {
  const userName = document.getElementById("username");

  userName.textContent = `${newUser[0]} ${newUser[1]}`;
}
