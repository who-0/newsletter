const input = document.querySelectorAll("input");
const td = document.querySelectorAll("td");
// const EMAIL = document.querySelector("#EMAIL");

function changeInput(e) {
  console.log("hi");

  e.disabled = false;
  e.focus();
  console.log(e.value);
}
// function changeEmail() {
//   console.log("hi");
//   email.disabled = false;
//   email.focus();
//   console.log(email.value);
// }

// td.addEventListener("click", changeInput);
// EMAIL.addEventListener("click", changeInput);
td.forEach((e) => {
  e.addEventListener("click", (_) => {
    console.log("hello world");
    input.forEach((i) => {
      console.log(i);
    });
  });
});

// email.addEventListener("blur", () => {
//   console.log("this is blur");
//   console.log(email.value);
//   email.blur();
//   email.disabled = true;
// });

input.forEach((e) => {
  e.addEventListener("blur", () => {
    console.log("this is blur");
    console.log(e.value);
    e.blur();
    e.disabled = true;
  });
});
