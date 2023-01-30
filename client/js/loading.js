const loading = document.getElementById("loading");
console.log(loading);
window.addEventListener("load", function () {
  loading.classList.remove("show");
  loading.classList.add("hidden");
});
