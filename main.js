// document.links[0].onmouseenter = function (event) {
//   // console.log(event.target);
//   console.log(event);
// };

// document.links[0].onclick = function (event) {
//   console.log(event);
//   event.preventDefault();
// };

let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");
let emailInput = document.querySelector("[name='email']");

document.forms[0].onsubmit = function (e) {
  let userValid = false;
  let ageValid = false;
  let emailValid = false;
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (emailInput.value.match(emailRegex)) {
    emailValid = true;
  }

  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
  }
  if (ageInput.value !== "" && ageInput.value > 0) {
    ageValid = true;
  }

  if (userValid === false || ageValid === false || emailValid === false) {
    e.preventDefault();
  } else {
    e.preventDefault();
    let myDiv = document.createElement("div");
    myDiv.innerHTML = `<p> Welcome ${userInput.value}, your email is ${emailInput.value} </p>`;

    document.body.appendChild(myDiv);
  }
};
