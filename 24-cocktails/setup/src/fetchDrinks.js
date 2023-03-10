const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";

import getElement from "./getElement.js";

const drinksCenter = getElement(".drinks-center");

const fetchDrinks = async (text) => {
  drinksCenter.innerHTML = ` <img src="./loading.gif" alt="" class="loadingGif" />`;
  try {
    const response = await fetch(`${url}s=${text}`);
    const data = await response.json();

    const drinks = data.drinks.map((d) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: url } = d;
      return { id, name, url };
    });

    drinksCenter.innerHTML = "";

    return drinks;
  } catch (err) {
    console.log(err);
    drinksCenter.innerHTML = `<p class="error">Sorry , No Drinks Matched your search</p>`;
  }
};

export default fetchDrinks;
