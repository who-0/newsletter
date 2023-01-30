const URL = "https://newsletter-c3an.onrender.com/admin/signup";
// const URL = "http://localhost:3000/admin/signup";
const signup = document.getElementById("signup");
signup.addEventListener("click", postSignup);
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
  console.log(newMember);
  if (!newMember) {
    location.replace("/error");
  } else if (newMember.error) {
    const encoded = encodeURIComponent(newMember.error);
    location.replace(`/error?${encoded}`);
  } else {
    const newUrl = URL.split("signup")[0];
    location.replace(newUrl);
  }
}
