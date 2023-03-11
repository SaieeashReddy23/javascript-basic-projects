import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displayButtons.js";

const btnContainer = document.querySelector(".btns-container");

let index = 0;
let pages = [];

const setupUI = () => {
  displayFollowers(pages[index]);
  displayButtons(pages, index);
};

const start = async () => {
  const data = await fetchFollowers();
  pages = paginate(data);
  setupUI();
};

btnContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("page-btn")) {
    index = parseInt(e.target.textContent) - 1;
  }

  if (e.target.classList.contains("prev")) {
    console.log("prev btn pressed");
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }

  if (e.target.classList.contains("next")) {
    console.log("next button pressed");
    index++;
    if (index > pages.length) {
      index = 0;
    }
  }
  setupUI();
});

document.addEventListener("DOMContentLoaded", start);
