const tbody = document.getElementById("table-body");
const URL = "https://newsletter-qsx1.onrender.com/admin/allsignup";
(async function () {
  const allSignup = await fetch(URL)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  let userData = "";
  allSignup.forEach((i, index) => {
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
