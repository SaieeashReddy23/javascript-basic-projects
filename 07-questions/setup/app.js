//using selectors inside the element
// traversing the dom

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const plus = card.querySelector(".plus-icon");
  const minus = card.querySelector(".minus-icon");
  const answer = card.querySelector(".answer-block");

  plus.addEventListener("click", () => {
    plus.style.display = "none";
    minus.style.display = "block";
    answer.style.display = "block";
  });

  minus.addEventListener("click", () => {
    plus.style.display = "block";
    minus.style.display = "none";
    answer.style.display = "none";
  });
});
