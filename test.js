var cart = [];
showItems();

function addItem() {
  var cartItems = items.value;
  // console.log(cartItems);

  if (cartItems != "") {
    cart.push(cartItems);
    items.value = "";
    document.getElementById("show").style.display = "none";
    showItems();
  } else {
    errorMessage();
  }
}

function errorMessage() {
  document.getElementById("show").style.display = "block";
}

function showItems() {
  if (cart == "") {
    showMyCart.innerHTML = "No items yet";
    document.getElementById("showMyCart").style.display = "block";
    document.getElementById("myTable").style.display = "none";
    document.getElementById("allButtons").style.display = "none";
  } else {
    showMyCart.innerHTML = "";
    document.getElementById("showMyCart").style.display = "none";
    document.getElementById("myTable").style.display = "table";
    document.getElementById("allButtons").style.display = "block";
    myTable.innerHTML = `
            <tr>
                <td class="col-1">S/N</td>
                <td class="col-6">Products</td>
            </tr>
        `;
    for (i = 0; i < cart.length; i++) {
      myTable.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${cart[i]}</td>
            </tr>
            `;
    }
  }
}

function deleteFirst() {
  cart.shift();
  showItems();
}

function deleteLast() {
  cart.pop();
  showItems();
}

function deleteAny() {
  var startingIndex = Number(
    prompt("Which number do you want to start deleting from")
  );
  var numberOfItems = Number(
    prompt("Enter number of items you want to delete")
  );
  var confirmation = confirm("Are you sure you want to perform this operation");
  if (confirmation) {
    console.log(confirmation);
    cart.splice(startingIndex - 1, numberOfItems);
    showItems();
  } else {
    console.log(confirmation);
    showItems();
  }
}

function editItem() {
  var editedIndex = Number(editedNewIndex.value);
  var editedValue = editedNewValue.value;

  if (editedIndex != "" && editedValue != "") {
    if (cart.length >= editedIndex) {
      console.log(editedIndex, editedValue);
      cart.splice(editedIndex - 1, 1, editedValue);
      document.getElementById("alert").style.display = "block";
      editedNewIndex.value = "";
      editedNewValue.value = "";
      showItems();
    } else {
      alert(`Cart is only ${cart.length} in number`);
    }
  } else {
    alert("Spaces cannot be blank");
  }
}

function addStart() {
  var item = prompt("Enter item you want to add");
  cart.unshift(item);
  showItems();
}

function deleteAll() {
  var confirmation = confirm("Are you sure? This action is not reversible o!");
  if (confirmation) {
    cart.splice(0, cart.length);
    showItems();
  } else {
    showItems();
  }
}
