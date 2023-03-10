const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?";

const center = document.querySelector(".center");

const fetchSingleDrink = async () => {
  center.innerHTML = `<img src="./loading.gif" alt="" class="loadingGif" />`;
  try {
    const id = localStorage.getItem("drink");
    const response = await fetch(`${url}i=${id}`);
    const data = await response.json();

    const drink = data.drinks[0];
    let ingredients = [];

    const {
      strDrinkThumb: imageUrl,
      strDrink: drinkName,
      strInstructions: instructions,
    } = drink;

    for (let keyValue in drink) {
      if (keyValue.includes("strIngredient") && drink[keyValue] !== null) {
        ingredients = [...ingredients, drink[keyValue]];
      }
    }

    center.innerHTML = "";

    return { imageUrl, drinkName, instructions, ingredients };
  } catch (err) {
    console.log(err);
    center.innerHTML = `<p class="error">Sorry , Some error occured ....</p>`;
  }
};

export default fetchSingleDrink;
