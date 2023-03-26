import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupSearch = (store) => {
  const search = getElement(".search-input");

  const productsContainer = getElement(".products-container");

  search.addEventListener("input", () => {
    let searchString = search.value;

    if (searchString) {
      let newStore = store.filter((product) => {
        let { name } = product;
        name = name.toLowerCase();
        if (name.startsWith(searchString)) {
          return true;
        }
      });

      display(newStore, productsContainer);

      if (newStore.length < 1) {
        productsContainer.innerHTML = `<h3 class="filter-error">
       sorry, no products matched your search
       </h3>`;
      }
    } else {
      display(store, getElement(".products-container"));
    }
  });
};

export default setupSearch;
