const checkPerson = () => {
  if (localStorage.person) {
    const gotten = JSON.parse(localStorage.getItem("person"));
    console.log(gotten);
    showPerson.innerHTML = `<h4 class="text-center">Welcome ${gotten.fName} ${gotten.lName} 😍</h4>`

  } else {

    body.innerHTML = `<h4 class="text-center">You are not signed in, we are redirecting you to signin page</h4>`
    setTimeout(() => {
      window.location.href = "signin.html";
    }, 1500);
  }
}
checkPerson()
const signOut = () => {
  localStorage.removeItem("person")
  checkPerson()
}
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
    hide.style.display = "none";
    // show.innerHTML=''
    listItem.style.display = "block";
    listItem2.style.display = "block";
    listItem3.style.display = "block";
    listItem4.style.display = "block";
    listItem5.style.display = "block";
    listItem6.style.display = "block";

    istItem6.style.display = "block";
    // }
  }
};
// DELETE FIRST ITEM
const deleteFirstItem = () => {
  const deleteMsg = confirm("Are you sure you want to delete the first items");
  if (deleteMsg == true) {
    cart.shift();

    displayItem();
  } else {
    displayItem();
  }
};
// DELETE LAST ITEMS
const deleteLastItem = () => {
  const deleteMsg = confirm("Are you sure you want to delete the last items");
  if (deleteMsg == true) {
    cart.pop();
    // hidesn()
    displayItem();
  } else {
    displayItem();
  }
};
// ADD ITEMS TO THE START
const itemToStart = () => {
  const deleteMsg = confirm(
    "Are you sure you want to add this item to the start"
  );
  if (deleteMsg == true) {
    cart.unshift();
    displayItem();
  } else {
    displayItem();

    listItem.style.display = "none";
    listItem2.style.display = "none";
    listItem3.style.display = "none";
    listItem4.style.display = "none";
    listItem5.style.display = "none";
    listItem6.style.display = "none";
  }
};
// DELETE ALL ITEM
const deleteAllItem = (index) => {
  const deleteMsg = confirm("Are you sure you want to delete all items");
  if (deleteMsg == true) {
    cart.splice(0);
    displayItem();
    hide.style.display = "block";

    show.innerHTML = "";
  } else {
    displayItem();

    listItem.style.display = "none";
    listItem2.style.display = "none";
    listItem3.style.display = "none";
    listItem4.style.display = "none";
    listItem5.style.display = "none";
    listItem6.style.display = "none";
  }
};
// DISPLAY ITEM
const displayItem = () => {
  if (cart.length == 0) {
    hide.style.display = "block";

    show.innerHTML = "";

    listItem.style.display = "none";
    listItem2.style.display = "none";
    listItem3.style.display = "none";
    listItem4.style.display = "none";
    listItem5.style.display = "none";
    listItem6.style.display = "none";
  } else {
    show.innerHTML = `
    <table table border = '5' > <tr><td>S/N</td><td>Products</td></tr> </table>
      `;
    cart.map((item, index) => {
      show.innerHTML += `

      <tr>
            <td>${index + 1}.</td>
            <td>${item}</td>
        </tr >
    `;
    });
  }
};
