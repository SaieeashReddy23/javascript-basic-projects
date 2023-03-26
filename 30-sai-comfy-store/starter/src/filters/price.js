import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupPrice = (store) => {
  const productsContainer = getElement(".products-container");
  const priceFilter = getElement(".price-filter");
  const priceValue = getElement(".price-value");

  const prices = store.map((prod) => prod.price);

  let maxPrice = Math.max(...prices);
  maxPrice = Math.ceil(maxPrice / 100);
  priceFilter.max = maxPrice;
  priceFilter.value = maxPrice;
  priceFilter.min = 0;

  priceValue.textContent = `Value : $${maxPrice}`;

  priceFilter.addEventListener("input", (e) => {
    const value = parseInt(priceFilter.value);
    let newStore = store.filter((product) => {
      let { price } = product;

      if (price / 100 <= value) {
        return true;
      }
    });

    if (newStore.length < 1) {
      productsContainer.innerHTML = `<h3 class="filter-error">
        sorry, no products matched your search
        </h3>`;
    } else {
      display(newStore, productsContainer);
    }
  });
};

export default setupPrice;
