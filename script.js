// sweet alert, toastify
// website name - npm.js
// uiverse
// const allUsers = [];

const toast = (text, background, color) => {
  Toastify({
    text: text,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: background,
      color: color,
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};

let userData = [];
if (localStorage.user) {
  let retrieved = JSON.parse(localStorage.getItem("user"));
  userData = retrieved;
} else {
  userData = [];
}
const signUp = () => {
  if (
    first.value === "" ||
    last.value === "" ||
    email.value === "" ||
    password.value === ""
  ) {
    toast("Haba now, fill in the inputs joor😠👿", "red", "#fff");
    sub.innerHTML = "...loading";
    setTimeout(() => {
      sub.innerHTML = "Submit";
    }, 1000);
  } else {
    const fName = document.getElementById("first").value;
    const lName = document.getElementById("last").value;
    const mail = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    const userObj = { fName, lName, mail, pass };
    userData.push(userObj);
    toast("Sign up successful😁", "#006400", "#fff");
    console.log(userData);

    document.getElementById("first").value = "";
    document.getElementById("last").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    localStorage.setItem("user", JSON.stringify(userData));
    setTimeout(() => {
      window.location.href = "signin.html";
    }, 2000);
  }
};
// console.log("Faith");
