const cart = [];
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
const displayItem = () => {
  show.innerHTML = "";
  show.innerHTML = `<h3 class="text-center my-3 text-decoration-underline">All Notes</h3>
  <table>
 
  </table>
  `;

  cart.map((item, index) => {
    show.innerHTML += `<table >
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
