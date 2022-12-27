const URL = "http://localhost:3000/";

async function postNewsLetter() {
  const fname = document.getElementById("fname");
  const lname = document.getElementById("lname");
  const mail = document.getElementById("email");
  if (!fname.value) {
    fname.style.border = "1px solid red";
    return fname.focus();
  } else if (!lname.value) {
    lname.style.border = "1px solid red";
    return lname.focus();
  } else if (!mail.value) {
    mail.style.border = "1px solid red";
    return mail.focus();
  }
  const data = {
    firstName: fname.value,
    lastName: lname.value,
    email: mail.value,
  };
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const NewUser = await fetch(URL, options)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  const encodedata = encodeURIComponent(
    `${NewUser.firstName},${NewUser.lastName},${NewUser.email}`
  );
  location.replace(URL + "success" + "?" + encodedata);
}

// window.addEventListener("", function () {
//   const loading = document.getElementsByClassName("loading");
//   loading[1].style.display = "none";
//   console.log(loading);
// });
window.addEventListener("loadstart", function () {
  const loading = document.getElementsByClassName("loading");
  loading[0].classList.add("show");
  loading[0].classList.remove("hidden");
  console.log(loading);
});
window.addEventListener("DOMContentLoaded", function () {
  const loading = document.getElementsByClassName("loading");
  loading[0].classList.add("hidden");
  loading[0].classList.remove("show");
  console.log(loading);
});
