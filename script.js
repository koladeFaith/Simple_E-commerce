const cart = [];
const addItem = () => {
  if (item.value === "") {
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";

    cart.push(item.value);
      document.getElementById("item").value = "";
        if (cart.length >= 1) {
          btnDelete.style.display = "block";
        }
}
displayItem();
};
const deleteItem = () => {
  if (cart.length >= 1) {
    const userValue = Number(prompt("Enter the number you want to delete"));
    if (userValue < 1) {
      prompt("Numbering start from 1");
    } else if (userValue <= cart.length) {
      cart.splice(userValue - 1, 1);
      displayItem();
      if (cart.length < 1) {
        btnDelete.style.display = "none";
      }
    } else {
      alert("Invalid input");
    }
  } else {
  }
};


const displayItem = () => {
  show.innerHTML = "";
  cart.map((data, i) => {
    show.innerHTML += ` <p>${i + 1}. ${data} </p>`;
  });
};

