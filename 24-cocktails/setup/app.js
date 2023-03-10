import "./src/searchForm.js";
import fetchDrinks from "./src/fetchDrinks.js";
import display from "./src/displayDrinks.js";

const start = async () => {
  const data = await fetchDrinks("a");
  display(data);
};

document.addEventListener("DOMContentLoaded", start);
