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
