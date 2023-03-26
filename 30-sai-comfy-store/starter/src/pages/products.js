// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

//  filter imports
import setupSearch from "../filters/search.js";
import setupCompanies from "../filters/companies.js";
import setupPrice from "../filters/price.js";

// specific imports
import { setupStore, store } from "../store.js";
import display from "../displayProducts.js";
import { getElement, setStorageItem } from "../utils.js";

import fetchProducts from "../fetchProducts.js";

const init = async () => {
  const loading = getElement(".page-loading");
  if (store.length < 1) {
    const products = await fetchProducts();
    setupStore(products);
  }
  display(store, getElement(".products-container"));

  // filters
  setupSearch(store);
  setupPrice(store);
  setupCompanies(store);

  loading.style.display = "none";
};

init();
