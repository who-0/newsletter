// const URL = "https://newsletter-c3an.onrender.com/admin/profile/user";
const URL = "http://localhost:3000/admin/profile/user";
const userName = document.getElementById("uname");
const email = document.getElementById("email");
const save = document.getElementById("save");
const profileInput = document.getElementsByClassName("profile-input");
(async function () {
  const user = await fetch(URL, {
    method: "get",
  }).then((res) => res.json());
  userName.value = user.username;
  userName.style.textTransform = "capitalize";
  userName.style.cursor = "pointer";
  email.value = user.email;
  userName.disabled = true;
  email.disabled = true;
})();

profileInput[0].addEventListener("click", function () {
  userName.disabled = false;
});
userName.addEventListener("blur", function () {
  userName.blur();
  userName.disabled = true;
});
save.addEventListener("click", updateUser);
async function updateUser() {
  //   console.log(userName.value);
  const data = {
    username: userName.value,
    email: email.value,
  };
  console.log(data);
  const updated = await fetch(URL, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  if (!updated) {
    return console.log("user not found");
  } else {
    return location.reload();
  }
}

//! loading-----------------
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
