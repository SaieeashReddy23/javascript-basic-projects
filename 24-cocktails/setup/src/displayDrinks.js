import getElement from "./getElement.js";
import setDrink from "./setDrink.js";

const drinksCenter = getElement(".drinks-center");

const display = (drinks) => {
  const drinksContainer = document.createElement("div");
  drinksContainer.classList.add("drinks-container");

  drinksContainer.innerHTML = drinks
    .map(({ id, name, url }) => {
      return `   <a href="./drink.html" class="drink" data-id=${id}>
          <img src=${url} alt="" class="image" />
          <span class="drink-name">${name}</span>
        </a>`;
    })
    .join("");

  drinksCenter.appendChild(drinksContainer);

  setDrink(drinksCenter);
};

export default display;
