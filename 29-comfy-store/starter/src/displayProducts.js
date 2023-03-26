import { formatPrice, getElement, singleProductUrl } from "./utils.js";
import { addToCart } from "./cart/setupCart.js";

const productsContainer = getElement(".products-container");
const display = (products) => {
  productsContainer.innerHTML = products
    .map((p) => {
      const id = p.id;
      const { company, price, name } = p.fields;
      const { url } = p.fields.image[0];
      return ` <div class="product-featured">
            <div class="product-container">
              <img
                src="${url}"
                alt=""
                class="featured-img"
              />
              <div class="product-icons">
                <a href="./product.html?id=${id}" class="search-icon">
                  <i class="fas fa-search"></i>
                </a>
                <button class="cart-icon" data-id = ${id}>
                  <i class="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
            <p>${name}</p>
            <h4>$${price}</h4>
          </div>`;
    })
    .join("");
};

export default display;
