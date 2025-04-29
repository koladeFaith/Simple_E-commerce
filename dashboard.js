const cart = [];
// ADD ITEM
const addItem = () => {
  if (note.value === "") {
    err.style.display = "block";
  } else {
    err.style.display = "none";
    cart.push(note.value);
    note.value = "";
    displayItem();
    listItem.style.display = "block";
    listItem2.style.display = "block";
    listItem3.style.display = "block";
    listItem4.style.display = "block";
    listItem5.style.display = "block";
    listItem6.style.display = "block";
  }
};
// DELETE FIRST ITEM
const deleteFirstItem = () => {
  const deleteMsg = confirm("Are you sure you want to delete the first items");
  if (deleteMsg == true) {
    cart.shift();
    displayItem();
    if (cart.length >= 0) {
      listItem.style.display = "block";
      listItem2.style.display = "block";
      listItem3.style.display = "block";
      listItem4.style.display = "block";
      listItem5.style.display = "block";
      listItem6.style.display = "block";
    } else {
      listItem.style.display = "none";
      listItem2.style.display = "none";
      listItem3.style.display = "none";
      listItem4.style.display = "none";
      listItem5.style.display = "none";
      listItem6.style.display = "none";
    }
  } else {
    displayItem();
  }
};

// DELETE ALL ITEM
const deleteAllItem = (index) => {
  const deleteMsg = confirm("Are you sure you want to delete all items");
  if (deleteMsg == true) {
    cart.splice(index, cart.length);
  } else {
    displayItem();
  }
  listItem.style.display = "none";
  listItem2.style.display = "none";
  listItem3.style.display = "none";
  listItem4.style.display = "none";
  listItem5.style.display = "none";
  listItem6.style.display = "none";
};
// DISPLAY ITEM
const displayItem = () => {
  show.innerHTML = "";
  show.innerHTML = `<h3 class="text-center my-3 text-decoration-underline">All Notes</h3>
  <table>
 
  </table>
  `;

  cart.map((item, index) => {
    show.innerHTML += `<table style="font-size: large">
        <tr>
  <td>S/N</td>
  <td>Products</td>
  </tr>
        <tr>
            <td>${index + 1}.</td>
            <td>${item}</td>
        </tr>
    </table>`;
  });
};
// if (cart.length == 0) {
//   listItem.style.display = "block";
//   listItem2.style.display = "block";
//   listItem3.style.display = "block";
//   listItem4.style.display = "block";
//   listItem5.style.display = "block";
//   listItem6.style.display = "block";
// } else {
//   listItem.style.display = "none";
//   listItem2.style.display = "none";
//   listItem3.style.display = "none";
//   listItem4.style.display = "none";
//   listItem5.style.display = "none";
//   listItem6.style.display = "none";
// }
