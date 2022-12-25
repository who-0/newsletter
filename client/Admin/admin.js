const input = document.querySelectorAll("input");
const td = document.querySelectorAll("td");

// function changeInput(e) {
//   console.log("hi");

//   e.disabled = false;
//   e.focus();
//   console.log(e.value);
// }

td.forEach((t) => {
  t.addEventListener("click", (_) => {
    let singleInput = t.children[0];
    singleInput.disabled = false;
    singleInput.focus();
    console.log(singleInput);
  });
});

// input.forEach((e) => {
//   e.addEventListener("click", (_) => {
//     console.log(e);
//     e.disabled = false;
//     e.focus();
//     console.log(e.value);
//   });
// });

input.forEach((e) => {
  e.addEventListener("blur", () => {
    console.log("this is blur");
    console.log(e.value);
    e.blur();
    e.disabled = true;
  });
});
