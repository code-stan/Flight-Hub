const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const form = document.getElementById("form")
//LOGIN BUTTON FOR LOGIN PAGE
const loginButton = document.querySelector("#login-button");

//SUBMIT BUTTON FOR SIGNUP PAGE
const submitButton = document.querySelector("#sign-up-button");

const invalidEmailPopup = document.querySelector(".invalid-email-popup");
const invalidPasswordPopup = document.querySelector(".invalid-password-popup");

// SIGN UP validation
// User name validation
const fullnameInput = document.getElementById("fullname-input");
const invalidUserNamePopup = document.querySelector(".invalid-UserName-popup");
const doubleNameRegex = /^([a-zA-Z]{1,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)/;


fullnameInput.addEventListener("input", ()=>{
  if(!fullnameInput.value.match(doubleNameRegex)){
      invalidUserNamePopup.innerHTML = "Please enter your fullname";
      invalidUserNamePopup.classList.add("active")
    }
    else{
      invalidUserNamePopup.innerHTML = "";
      invalidUserNamePopup.classList.remove("active")
    }
})

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
  
  if (fullnameInput.value == "") {
    invalidUserNamePopup.classList.add("active");
    invalidUserNamePopup.innerHTML = "Please enter your fullname"
  } else if (!fullnameInput.value.match(doubleNameRegex)) {
    invalidEmailPopup.classList.add("active");
    invalidUserNamePopup.innerHTML = "Please enter your fullname";
  } else {
    invalidUserNamePopup.classList.remove("active");
    invalidUserNamePopup.innerHTML =
      "";
  }
}



//BACKEND REFERENCE

var firstName, secondName;

function firstName(){
  firstName = fullnameInput.value.slice(0, fullnameInput.value.indexOf(" "));
  console.log(firstName);
}
function secondName(){
  secondName = fullnameInput.value.slice(fullnameInput.value.lastIndexOf(" ")+1);
  console.log(secondName);
}


// SUBMIT EVENT LISTENERS
form.addEventListener("submit", (e) =>{
  e.preventDefault();
  submitCondition();
  firstName();
  secondName();
});