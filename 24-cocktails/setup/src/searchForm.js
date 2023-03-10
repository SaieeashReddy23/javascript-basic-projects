import getElement from "./getElement.js";
import fetchDrinks from "./fetchDrinks.js";
import display from "./displayDrinks.js";

const search = getElement(".search");

search.addEventListener("input", async (e) => {
  let val = e.target.value !== "" ? e.target.value : "a";
  const data = await fetchDrinks(val);
  display(data);
});
