const URL = "http://localhost:3000/admin/signup";

async function postSignup() {
  const username = document.getElementById("uname");
  const mail = document.getElementById("email");
  const password = document.getElementById("pwd");
  const verifyCode = document.getElementById("code");
  const roles = document.getElementById("role");
  const data = {
    uname: username.value,
    email: mail.value,
    pwd: password.value,
    code: verifyCode.value,
    role: roles.value,
  };

  const newMember = await fetch(URL, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());

  const newUrl = URL.split("signup")[0];
  location.replace(newUrl);
}

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
