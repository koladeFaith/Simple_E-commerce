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
    onClick: function () { }, // Callback after click
  }).showToast();
};

let userData = [];
if (localStorage.user) {
  let retrieved = JSON.parse(localStorage.getItem("user"));
  userData = retrieved;
} else {
  userData = [];
}

addEventListener('input', () => {
  const passwordInput = document.getElementById('password');
  const lengthCheck = document.getElementById('length');
  const uppercaseCheck = document.getElementById('uppercase');
  const lowercaseCheck = document.getElementById('lowercase');
  const numberCheck = document.getElementById('number');
  const specialCheck = document.getElementById('special');
  const passwordVer = passwordInput.value;

  lengthCheck.style.color = passwordVer.length >= 8 ? 'green' : 'red';
  uppercaseCheck.style.color = /[A-Z]/.test(passwordVer) ? 'green' : 'red';
  lowercaseCheck.style.color = /[a-z]/.test(passwordVer) ? 'green' : 'red';
  numberCheck.style.color = /[0-9]/.test(passwordVer) ? 'green' : 'red';
  specialCheck.style.color = /[!@#$%^&*(),.?":{}|<>]/.test(passwordVer) ? 'green' : 'red';
});
const signUp = () => {
  if (
    first.value === "" ||
    last.value === "" ||
    email.value === "" ||
    password.value === ""
  ) {
    toast("Haba now, fill in the inputs joor😠👿", "red", "#fff");
    // loader.style.display = "block";
    sub.innerHTML = "...loading";
    setTimeout(() => {
      sub.innerHTML = "Submit";
    }, 1000);
  } else {
    sub.innerHTML = "...loading";

    const fName = document.getElementById("first").value;
    const lName = document.getElementById("last").value;
    const mail = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    const userObj = { fName, lName, mail, pass };
    let found = userData.find((eachUser) => eachUser.mail == mail);
    if (found == undefined) {
      userData.push(userObj);
      toast("Sign up successful😁", "#006400", "#fff");

      console.log(userData);

      localStorage.setItem("user", JSON.stringify(userData));
      setTimeout(() => {
        window.location.href = "signin.html";
      }, 2000);
    } else {
      toast("Account already exists", "#00f", "#fff");
      setTimeout(() => {
        sub.innerHTML = "Submit";
      }, 1000);
      document.getElementById("first").value = "";
      document.getElementById("last").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    }
    console.log(found);
  }
};
// console.log("Faith");
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    signUp()
  }
})

const password = document.getElementById('password')
const show = document.querySelector("#show")
show.addEventListener("click", () => {
  if (password.getAttribute("type") === "password") {
    password.setAttribute("type", "text")
    show.classList.replace("bi-eye", "bi-eye-slash")
  } else {
    password.setAttribute("type", "password")
    show.classList.replace("bi-eye-slash", "bi-eye")

  }
})