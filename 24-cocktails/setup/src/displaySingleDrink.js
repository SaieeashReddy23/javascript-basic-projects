import getElement from "./getElement.js";

const center = getElement(".center");

const displaySingleDrink = ({
  imageUrl,
  drinkName,
  instructions,
  ingredients,
}) => {
  const ingred = ingredients
    .map((ingredient) => {
      return ` <li><span class="far fa-check-square check-icon"></span> ${ingredient}</li>`;
    })
    .join("");

  center.innerHTML = `<div class="single-drink-container">
        <div class="single-drink">
          <img src=${imageUrl} alt="" class="single-image" />
        </div>
        <div class="single-drink-info">
          <h1 class="name"> ${drinkName}</h1>
          <p class="single-drink-text">${instructions}</p>
          <ul class="items">${ingred}</ul>
          <a href="./index.html" class="btn">All cocktails</a>
        </div>
      </div>`;
};

export default displaySingleDrink;
