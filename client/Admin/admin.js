const input = document.querySelectorAll("input");
const td = document.querySelectorAll("td");

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
