const URL = "https://newsletter-c3an.onrender.com/admin/login";
// const URL = "http://localhost:3000/admin/login";
const login = document.getElementById("login");
login.addEventListener("click", postLogin);
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
  } else if (success.err) {
    const encoded = encodeURIComponent(success.err);
    Location.replace("/error" + `?${encoded}`);
  } else {
    const newUrl = URL.split("login")[0];
    location.replace(newUrl);
  }
}
