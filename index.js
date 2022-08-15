let userNameField = document.querySelector("#Username");
let passwordField = document.querySelector("#password");
let alertMessage = document.querySelector(".alertMessage");
let alertPasswordMessage = document.querySelector(".alertPasswordMessage");
let alertSucessMessage = document.querySelector(".successMessage");
let loginButton = document.querySelector(".loginBtn");

loginButton.addEventListener("click", () => {
  let userName = userNameField.value;
  let password = passwordField.value;

  if ((userName && password) == "" || (userName && password) == null) {
    console.log("Password Field is empty!!!");
    alertMessage.style.display = "block";
    setTimeout(() => {
      console.log("Username or Password can not be empty!!!");
      alertMessage.style.display = "none";
    }, 3000);
  } else if (password.length < 6) {
    console.log("Password length issue");
    alertPasswordMessage.style.display = "block";
    setTimeout(() => {
      console.log("Username or Password can not be empty!!!");
      alertPasswordMessage.style.display = "none";
    }, 3000);
  } else {
    console.log("Validation SuccessFull");
    alertSucessMessage.style.display = "block";
    setTimeout(() => {
      console.log("Username or Password can not be empty!!!");

      alertSucessMessage.style.display = "none";
      document.location.reload();
    }, 3000);
  }
});
