// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";
// specific
import { addToCart } from "../cart/setupCart.js";
import { singleProductUrl, getElement, formatPrice } from "../utils.js";

// selections
// const loading = getElement('.page-loading');
// const centerDOM = getElement('.single-product-center');
// const pageTitleDOM = getElement('.page-hero-title');
// const imgDOM = getElement('.single-product-img');
// const titleDOM = getElement('.single-product-title');
// const companyDOM = getElement('.single-product-company');
// const priceDOM = getElement('.single-product-price');
// const colorsDOM = getElement('.single-product-colors');
// const descDOM = getElement('.single-product-desc');
// const cartBtn = getElement('.addToCartBtn');

// cart product
// let productID;

// show product when page loads

const singleProductContainer = getElement(".single-product-container");
const header = getElement(".header");

let id = new URLSearchParams(window.location.search).get("id");

const fetchSingleProduct = async () => {
  const response = await fetch(`${singleProductUrl}?id=${id}`);
  const data = await response.json();
  console.log(data);
  return data;
};

const displaySingleLement = (data) => {
  const { company, name, price, description, colors } = data.fields;
  console.log(colors);

  const { url } = data.fields.image[0];

  header.innerHTML = `<h3>Home / ${name}</h3>`;

  singleProductContainer.innerHTML = ` <img
        src=${url}
        alt=""
        class="single-img"
      />

      <div class="single-product-content">
        <h3 class="single-product-name">${name}</h3>

        <div class="single-product-company">BY ${company}</div>

        <div class="single-product-price">$${price}</div>

        <div class="colors-container">
        </div>

        <p class="text">
          ${description}
        </p>

        <button class="single-product-btn">Add to cart</button>
      </div>`;

  const colorsContainer =
    singleProductContainer.querySelector(".colors-container");

  colorsContainer.innerHTML = colors
    .map((c) => {
      return `<div class="color" style="background-color:${c};"></div>`;
    })
    .join("");
};

const showPage = async () => {
  const data = await fetchSingleProduct();
  displaySingleLement(data);
};

showPage();
