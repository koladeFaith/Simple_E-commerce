let gottenUser = JSON.parse(localStorage.getItem("user")) || [];
// TOASTIFY
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

const signIn = () => {
  if (email.value === "" || password.value === "") {
    toast("Haba now, fill in the inputs joor😠👿", "#f00", "#fff");
    sub.innerHTML = "...loading";
    setTimeout(() => {
      sub.innerHTML = "Submit";
    }, 1000);
  } else {
    sub.innerHTML = "...loading";
    const mail = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    const signInObj = { mail, pass };
    console.log(signInObj);

    let found = gottenUser.find(
      (user) => user.mail == mail && user.pass == pass
    );
    localStorage.setItem("person", JSON.stringify(found));
    console.log(found);

    if (found === undefined) {
      toast("User not found", "#f01400", "#fff");
      sub.innerHTML = "Submit";
    } else {
      toast("Sign in successful😁", "#006400", "#fff");
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 2000);
    }
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  }
};
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    signIn()
  }
})