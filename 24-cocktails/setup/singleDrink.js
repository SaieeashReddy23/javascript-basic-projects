import displaySingleDrink from "./src/displaySingleDrink.js";

import fetchSingleDrink from "./src/fetchSingleDrink.js";

const start = async () => {
  const data = await fetchSingleDrink();
  displaySingleDrink(data);
};

document.addEventListener("DOMContentLoaded", start);
