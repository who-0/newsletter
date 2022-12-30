const input = document.querySelectorAll("input");
const td = document.querySelectorAll("td");
const API_URL = "http://localhost:3000/allsingup";

(async function () {
  const allSignup = await fetch(API_URL, {
    method: "get",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  console.log(allSignup);
})();

td.forEach((t) => {
  t.addEventListener("click", (_) => {
    let singleInput = t.children[0];
    singleInput.disabled = false;
    singleInput.focus();
    console.log(singleInput);
  });
});

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
