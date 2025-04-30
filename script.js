// sweet alert, toastify
// website name - npm.js
// uiverse
const userData = [];

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const password = document.getElementById("password");
const dataObj = { firstName, lastName, email, password };
const submitFun = () => {
  localStorage.setItem("data", JSON.stringify(dataObj));
};
