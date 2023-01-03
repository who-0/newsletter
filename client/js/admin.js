const URL = "https://newsletter-qsx1.onrender.com/admin/allsignup";
// const URL = "http://localhost:3000/admin/allsignup";
const tbody = document.getElementById("table-body");
(async function () {
  const allSignup = await fetch(URL)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  let userData = "";
  const role = allSignup[allSignup.length - 1];
  if (role.role === "member") {
    allSignup.pop();
    allSignup.forEach((i, index) => {
      userData += `
    <tr>
    <th scope="row">${index + 1}</th>
    <td class='firstname'>${i.firstname}</td>
    <td class='lastname'>${i.lastname}</td>
    <td>${i.email}</td>
    </tr>
    `;
    });
  } else {
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
  }

  tbody.innerHTML = userData;
})();

window.addEventListener("load", function () {
  const loading = document.getElementsByClassName("loading");
  loading[0].classList.remove("show");
  loading[0].classList.add("hidden");
});
// window.addEventListener("loadedredata", function () {
//   const loading = document.getElementsByClassName("loading");
//   loading[0].classList.add("hidden");
//   loading[0].classList.remove("show");
// });