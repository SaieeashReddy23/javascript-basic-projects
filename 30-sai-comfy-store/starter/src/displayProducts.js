import { formatPrice } from "./utils.js";
import { addToCart } from "./cart/setupCart.js";
const display = (products, element) => {
  element.innerHtml = products.map((p) => {
    // display products
    element.innerHTML = products
      .map((product) => {
        const { id, name, image, price } = product;
        return ` <article class="product">
          <div class="product-container">
            <img src="${image}" class="product-img img" alt="${name}" />
            <div class="product-icons">
              <a href="product.html?id=${id}" class="product-icon">
                <i class="fas fa-search"></i>
              </a>
              <button class="product-cart-btn product-icon" data-id="${id}">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <footer>
            <p class="product-name">${name}</p>
            <h4 class="product-price">${formatPrice(price)}</h4>
          </footer>
        </article> `;
      })
      .join("");
  });

  element.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("product-cart-btn")) {
      let id = e.target.parentElement.dataset.id;
      addToCart(id);
    }
  });
};

export default display;
