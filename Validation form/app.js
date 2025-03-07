const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password1 = document.querySelector(".password1");
const password2 = document.querySelector(".password2");
const submit = document.querySelector(".submit");

const usernameMessage = document.querySelector(".user-msg");
const emailMessage = document.querySelector(".email-msg");
const password1Message = document.querySelector(".password1-msg");
const password2Message = document.querySelector(".password2-msg");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    username.value === "" &&
    email.value === "" &&
    password1.value === "" &&
    password2.value === ""
  ) {
    alert("Please enter all input fields");
  }

  if (username.value === "") {
    showMessage(usernameMessage, "Please Provide Your Name", "Red");
  } else {
    showMessage(usernameMessage, "Got Your Name", "green");
  }

  if (email.value === "") {
    showMessage(emailMessageMessage, "Please Provide Your Email", "Red");
  } else {
    showMessage(emailMessage, "Got Your Email", "green");
  }

  if (password1.value === "") {
    showMessage(password1Message, "Please Provide Your Password", "Red");
  } else {
    showMessage(password1Message, "Valid Password", "green");
  }

  if (password2.value === "") {
    showMessage(password2Message, "Please Provide Your Password", "Red");
  } else if (password1.value !== password2.value) {
    showMessage(password2Message, "Password doesn't match", "red");
  } else {
    showMessage(password2Message, "Password matched", "green");
  }
});

function showMessage(element, msg, color) {
  element.style.visibility = "visible";
  element.textContent = msg;
  element.style.color = color;
  element.previousElementSibling.style.border = `3px solid ${color}`;
}
