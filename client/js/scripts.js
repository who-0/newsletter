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
    .then((data) => data)
    .catch((err) => console.log(err));
  if (NewUser.newUser) {
    const encodedata = encodeURIComponent(
      `${NewUser.newUser.firstname},${NewUser.newUser.lastname},${NewUser.newUser.email}`
    );
    location.replace(URL + "success" + "?" + encodedata);
  } else {
    const encodedata = encodeURIComponent(
      `${NewUser.firstname},${NewUser.lastname}`
    );
    location.replace(URL + "error" + "?" + encodedata);
  }
}

const hiddenElements = document.querySelectorAll(".hidden-container");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-container");
    } else {
      entry.target.classList.remove("show-container");
    }
  });
});

hiddenElements.forEach((el) => observer.observe(el));

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
