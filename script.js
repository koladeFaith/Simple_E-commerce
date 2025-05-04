// sweet alert, toastify
// website name - npm.js
// uiverse
// const allUsers = [];

// const signUp = () => {
//   window.location.href = "signin.html";
// };
// TOASTIFY
// const toast = (text, background, color) => {
//   Toastify({
//     text,
//     duration: 3000,
//     newWindow: true,
//     close: true,
//     gravity: "top", // `top` or `bottom`
//     position: "center", // `left`, `center` or `right`
//     stopOnFocus: true, // Prevents dismissing of toast on hover
//     style: {
//       background,
//       color,
//     },
//     onClick: function () {}, // Callback after click
//   }).showToast();
// };

// const userData = [];

// const signUp = () => {
//   if (
//     first.value === "" ||
//     last.value === "" ||
//     email.value === "" ||
//       password.value === ""

//   ) {
//     toast("Fill the input, please", "red", "white");
//   } else {
//     const firstName = document.getElementById("first").value;
//     const lastName = document.getElementById("last").value;
//     const mail = document.getElementById("email").value;
//       const pass = document.getElementById("password").value;
//       console.log(firstName, lastName, mail, pass);

//     const dataObj = {
//       firstName,
//       lastName,
//       mail,
//       pass,
//     };
//     userData.push(dataObj);
//     toast("Sign in sucessfully", "green", "black");
//     console.log(userData);
//   }
// };
const toast = () => {
  Toastify({
    text: "Hello",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "red",
      color: "white",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};

const userData = [];

const signUp = () => {
  if (
    first.value === "" ||
    last.value === "" ||
    email.value === "" ||
    password.value === ""
  ) {
    toast("Haba now, fill in the inputs joor😠👿", "#f00", "#fff");
    // sub.innerHTML = "...loading";
    // setTimeout(() => {
    //   sub.innerHTML = "Submit";
    // }, 1000);
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
  }
};
console.log("Faith");
