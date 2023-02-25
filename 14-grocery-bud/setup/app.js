// ****** SELECT ITEMS **********

let items = ["Chicken", "Eggs", "Biryani"];

let editState = false;
let editElement;

const addMessage = `<p class="add">Item added to the list</p>`;
const editedMessage = `<p class="add"> Item Edited</p>`;
const removeMessage = `<p class="remove">Item Removed</p>`;
const emptyMessage = `<p class="empty">Empty list</p>`;
const enterMessage = `<p class="enter">Please enter value</p>`;

const notification = document.querySelector(".notification");

const submit = document.querySelector(".Submit-btn");

const clear = document.querySelector(".clear");

const input = document.querySelector(".inputTag");

const groceryList = document.querySelector(".grocery-list");

// edit option

// ****** EVENT LISTENERS **********

submit.addEventListener("click", addItem);

clear.addEventListener("click", clearItems);

window.addEventListener("DOMContentLoaded", setUpItems);
// ****** FUNCTIONS **********

function addItem(e) {
  e.preventDefault();
  let groceryVal = input.value;
  let id = new Date().getTime().toString();

  if (groceryVal !== "" && !editState) {
    const element = document.createElement("li");
    element.classList.add("item");
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<div class="item-text">${groceryVal}</div>
          <div class="item-btns">
            <button class="edit-btn">
              <i class="fas fa-edit"></i>
            </button>
            <button class="delete-btn">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        `;
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);
    groceryList.appendChild(element);
    addtoLocalStorage(id, groceryVal);
    messageFunction(addMessage);
  } else if (groceryVal !== "" && editState) {
    const textItem = editElement.querySelector(".item-text");
    textItem.textContent = groceryVal;
    submit.textContent = "Submit";
    editStorageItem(textItem.parentElement.dataset.id, groceryVal);
    editState = false;
    messageFunction(editedMessage);
  } else {
    messageFunction(enterMessage);
  }

  input.value = "";
}

function clearItems(e) {
  groceryList.innerHTML = "";
  removeAllStorageItems();
  messageFunction(emptyMessage);
}

function deleteItem(e) {
  const element = e.target.parentElement.parentElement.parentElement;
  deleteStorageItem(element.dataset.id);
  groceryList.removeChild(element);
  messageFunction(removeMessage);
}

function editItem(e) {
  editState = true;
  submit.textContent = "edit";
  editElement = e.target.parentElement.parentElement.parentElement;
  const textItem = editElement.querySelector(".item-text");
  input.value = textItem.textContent;
}

function messageFunction(message) {
  notification.innerHTML = message;
  setInterval(() => {
    notification.innerHTML = "";
  }, 2000);
}

// ****** LOCAL STORAGE **********

function addtoLocalStorage(id, value) {
  const list = getLocalStorage();
  list.push({ id: id, value: value });
  localStorage.setItem("list", JSON.stringify(list));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

// ****** SETUP ITEMS **********

function setUpItems() {
  const list = getLocalStorage();

  if (list.length > 0) {
    list.forEach(({ id, value }) => {
      createListItem(id, value);
    });
  }
}

function editStorageItem(id, value) {
  let items = getLocalStorage();

  console.log(id);
  console.log(value);

  console.log(items);

  items = items.map((item) => {
    if (item.id == id) {
      item.value = value;
      return item;
    }
    return item;
  });

  localStorage.setItem("list", JSON.stringify(items));
}

function removeAllStorageItems() {
  localStorage.setItem("list", []);
}

function deleteStorageItem(id) {
  let list = getLocalStorage();

  list = list.filter((item) => {
    if (item.id != id) {
      return item;
    }
  });

  localStorage.setItem("list", JSON.stringify(list));
}

function createListItem(id, value) {
  const element = document.createElement("li");
  element.classList.add("item");
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `<div class="item-text">${value}</div>
          <div class="item-btns">
            <button class="edit-btn">
              <i class="fas fa-edit"></i>
            </button>
            <button class="delete-btn">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        `;
  const deleteBtn = element.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteItem);
  const editBtn = element.querySelector(".edit-btn");
  editBtn.addEventListener("click", editItem);
  groceryList.appendChild(element);
}
