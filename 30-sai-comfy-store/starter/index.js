// global imports
import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";
import "./src/cart/setupCart.js";
// specific imports
import fetchProducts from "./src/fetchProducts.js";
import { setupStore, store } from "./src/store.js";
import display from "./src/displayProducts.js";
import { getElement } from "./src/utils.js";

const featureContainer = getElement(".featured-center");

document.addEventListener("DOMContentLoaded", async () => {
  const products = await fetchProducts();
  setupStore(products);
  const featuredProducts = store.filter((item) => item.featured);
  display(featuredProducts, featureContainer);
});
