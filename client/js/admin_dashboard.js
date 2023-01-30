const URL = "https://newsletter-c3an.onrender.com/admin/allsignup";
// const URL = "http://localhost:3000/admin/allsignup";
const tbody = document.getElementById("table-body");
(async function () {
  let userData = "";
  const allSignup = await fetch(URL)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  const role = allSignup[allSignup.length - 1];
  if (!allSignup) {
    location.replace("/error");
  } else if (allSignup.error) {
    const encoded = encodeURIComponent(allSignup.error);
    location.replace(`/error?${encoded}`);
  } else if (role.role === "member") {
    allSignup.pop();
    console.log("member");
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
    console.log("admin");
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
