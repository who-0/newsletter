const URL = "https://newsletter-qsx1.onrender.com/admin/login";
async function postLogin() {
  const mail = document.getElementById("email");
  const password = document.getElementById("pwd");
  const data = {
    email: mail.value,
    pwd: password.value,
  };
  const success = await fetch(URL, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());
  console.log(success);
  if (!success) {
    Location.replace("/error");
  }
  const newUrl = URL.split("login")[0];
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
