// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from "../utils.js";
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDOM from "./addToCartDOM.js";
// set items

let cart = getStorageItem("cart");

const cartTotal = getElement(".cart-total");
const cartItemCount = getElement(".cart-item-count");

const cartItemsDom = getElement(".cart-items");

export const addToCart = (id) => {
  let item = cart.find((prod) => prod.id == id);

  if (!item) {
    // add to cart
    let prod = findProduct(id);
    prod = { ...prod, amount: 1 };
    cart = [...cart, prod];
    addToCartDOM(prod);
  } else {
    // update cart
    let newAmount = increaseCartItemAmount(id);
    const cartItemAmounts = document.querySelectorAll(".cart-item-amount");
    cartItemAmounts.forEach((cartItem) => {
      if (cartItem.dataset.id == id) {
        cartItem.textContent = newAmount;
      }
    });
  }

  console.log(cart);

  // cartItems count
  cartItemsCount();

  // total price display
  totalPrice();

  // store in local storage

  setStorageItem("cart", cart);

  openCart();
};

const cartItemsCount = () => {
  let total = cart.reduce((total, item) => {
    return (total += item.amount);
  }, 0);
  cartItemCount.textContent = total;
};

const totalPrice = () => {
  let totalAmount = cart.reduce((total, item) => {
    return (total += item.price * item.amount);
  }, 0);

  cartTotal.textContent = `total : ${formatPrice(totalAmount)}`;
};

const increaseCartItemAmount = (id) => {
  let newAmount;
  cart = cart.map((prod) => {
    if (prod.id == id) {
      newAmount = prod.amount + 1;
      prod = { ...prod, amount: newAmount };
      return prod;
    }
    return prod;
  });

  return newAmount;
};

const displaycartItemsDom = () => {
  cart.forEach((it) => {
    addToCartDOM(it);
  });
};

const removeItem = (id) => {
  cart = cart.filter((item) => item.id != id);
};

const decreaseCartItemAmount = (id) => {
  let newAmount;
  cart = cart.map((prod) => {
    if (prod.id == id) {
      newAmount = prod.amount - 1;
      prod = { ...prod, amount: newAmount };
      return prod;
    }
    return prod;
  });

  return newAmount;
};

const setUpCartFunctionality = () => {
  cartItemsDom.addEventListener("click", (e) => {
    const element = e.target;
    const parent = e.target.parentElement;
    let targetId;
    // remove
    if (element.classList.contains("cart-item-remove-btn")) {
      targetId = element.dataset.id;
      removeItem(targetId);
      parent.parentElement.remove();
    }

    //increase
    if (parent.classList.contains("cart-item-increase-btn")) {
      targetId = parent.dataset.id;
      let newAmount = increaseCartItemAmount(targetId);
      parent.nextElementSibling.textContent = newAmount;
    }

    //decrease
    if (parent.classList.contains("cart-item-decrease-btn")) {
      targetId = parent.dataset.id;
      let newAmount = decreaseCartItemAmount(targetId);

      if (newAmount == 0) {
        removeItem(targetId);
        parent.parentElement.parentElement.remove();
      } else {
        parent.previousElementSibling.textContent = newAmount;
      }
    }

    cartItemsCount();
    totalPrice();
    setStorageItem("cart", cart);
  });
};

const init = () => {
  // display cartItems count
  cartItemsCount();

  // display all the elements in cartDom
  displaycartItemsDom();

  // display total price
  totalPrice();

  // setupFUnctionality , that increase , decrese , and remove in cart items
  setUpCartFunctionality();
};

init();
