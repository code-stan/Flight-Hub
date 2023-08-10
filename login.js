const eyeOpened = document.querySelector(".open-eye-icon");
const eyeClosed = document.querySelector(".closed-eye-icon");
const userPassword = document.querySelector(".password");
eyeClosed.addEventListener("click", () => {
  eyeOpened.classList.toggle("opened");
  eyeClosed.classList.add("opened");

  const currentType = userPassword.getAttribute("type");

  userPassword.setAttribute(
    "type",
    currentType === "password" ? "text" : "password"
  );
});
eyeOpened.addEventListener("click", () => {
  eyeOpened.classList.remove("opened");
  eyeClosed.classList.toggle("opened");

  const currentType = userPassword.getAttribute("type");

  userPassword.setAttribute(
    "type",
    currentType === "password" ? "text" : "password"
  );
});
// eye

// email and password validation for the login page
// nb: I didn't add validation for mix of numbers, alphabets or symbols for the password


//====================== FORM VALIDATION======================


//----VARIABLES----

const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const form = document.getElementById("form");

//LOGIN BUTTON FOR LOGIN PAGE
const loginButton = document.querySelector("#login-button");

//SUBMIT BUTTON FOR SIGNUP PAGE
const submitButton = document.querySelector("#sign-up-button");

const invalidEmailPopup = document.querySelector(".invalid-email-popup");
const invalidPasswordPopup = document.querySelector(".invalid-password-popup");



// REGEX FOR VALIDATION
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /\S+/;
emailInput.addEventListener("input", () => {
  // invalidEmailPopup.innerHTML = "Please put in an email address"
  if (!emailInput.value.match(emailRegex)) {
    invalidEmailPopup.innerHTML = "Please put in a valid email address"
    invalidEmailPopup.classList.add("active");
  } else {
    invalidEmailPopup.innerHTML = "";
    invalidEmailPopup.classList.remove("active");
  }
});
passwordInput.addEventListener("input", ()=>{
  if (passwordInput.value == "") {
    invalidPasswordPopup.classList.add("active");
  } else if (passwordInput.value.length < 8) {
    invalidPasswordPopup.classList.add("active");
    invalidPasswordPopup.innerHTML =
      "Please put in a password which is up to 8 characters";
  }
  else if(passwordInput.value.length >= 8 && passwordInput.value.match(passwordRegex)){
    invalidPasswordPopup.classList.remove("active");
    invalidPasswordPopup.innerHTML =
      "";
  }

})
/*===================================
      SUBMIT CONDITIONAL STATEMENT
=======================================*/

function submitCondition(){  
  if (emailInput.value == "") {
    invalidEmailPopup.classList.add("active");
    invalidEmailPopup.innerHTML = "Please put in an email address";
  } else if (!emailInput.value.match(emailRegex)) {
    invalidEmailPopup.classList.add("active");
  } else {
    invalidEmailPopup.classList.remove("active");
  }

  if (passwordInput.value == "") {
    invalidPasswordPopup.classList.add("active");
    invalidPasswordPopup.innerHTML = "Please enter a unique password"
  } else if (passwordInput.value.length < 8) {
    invalidPasswordPopup.classList.add("active");
    invalidPasswordPopup.innerHTML =
      "Please put in a password which is up to 8 characters";
  } else {
    invalidPasswordPopup.classList.remove("active");
    invalidPasswordPopup.innerHTML =
      "";
  }
  
}

//SUBMIT EVENT LISTENERS
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    submitCondition()}
    );

