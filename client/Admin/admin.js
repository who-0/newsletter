const tbody = document.getElementById("table-body");
const API_URL = "http://localhost:3000/admin/allsignup";
(async function () {
  const allSignup = await fetch(API_URL)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  let userData = "";
  allSignup.forEach((i, index) => {
    console.log(i._id);
    userData += `
    <tr>
    <th scope="row">${index + 1}</th>
    <td class='firstname'>${i.firstname}</td>
    <td class='lastname'>${i.lastname}</td>
    <td>${i.email}</td>
    <td class="delete"><a href="/admin/user/${i._id}">X</a></td>
    </tr>
    `;
  });
  tbody.innerHTML = userData;
})();

const input = document.querySelectorAll("input");
const tds = document.querySelectorAll("td");
tds.forEach((t) => {
  console.log(t);
});
// tds.forEach((t) => {
//   console.log("this is testing");
//   t.addEventListener("click", (_) => {
//     console.log("hi");
//     let singleInput = t.children[0];
//     singleInput.disabled = false;
//     singleInput.focus();
//     console.log(singleInput);
//   });
// });

function changeInput() {
  console.log("hi");
  // let singleInput = t.children[0];
  // singleInput.disabled = false;
  // singleInput.focus();
  // console.log(singleInput);
}

input.forEach((e) => {
  e.addEventListener("blur", () => {
    console.log("this is blur");
    console.log(e.value);
    e.blur();
    e.disabled = true;
  });
});

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
