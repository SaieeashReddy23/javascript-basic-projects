import { getElement } from "../utils.js";

const showCart = getElement(".toggle-cart");
const cartContainer = getElement(".side-cart-container");
const closeCart = getElement(".close-side-cart");
const sideCart = getElement(".side-cart");

showCart.addEventListener("click", () => {
  sideCart.classList.toggle("show-cart");
  cartContainer.style.zIndex = 100;
  cartContainer.style.opacity = 1;
  console.log(cartContainer.style.zIndex);
});

closeCart.addEventListener("click", () => {
  sideCart.classList.toggle("show-cart");
  setTimeout(() => {
    cartContainer.style.opacity = 0;
    cartContainer.style.zIndex = -100;
  }, 300);
});

export const openCart = () => {};
