// TOASTIFY
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
const found = localStorage.getItem("user")
const signIn = () => {
  if (email.value === "" || password.value === "") {
    toast("Haba now, fill in the inputs joor😠👿", "#f00", "#fff");
  } else {
    alert(found[2])
  }

  window.location.href = "dashboard.html";
};
