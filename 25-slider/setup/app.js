import people from "./data.js";

const slideContainer = document.querySelector(".slide-container");

const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

const showPeople = (p) => {
  slideContainer.innerHTML = p
    .map(({ img, name, job, text }, index) => {
      let classVal;

      if (index == 0) {
        classVal = "active";
      } else if (index == people.length - 1) {
        classVal = "prev";
      } else {
        classVal = "next";
      }
      return ` <div class="slide ${classVal}">
          <img
            src=${img}
            alt=""
            class="image"
          />
          <div class="name">${name}</div>
          <div class="role">${job}</div>
          <p class="text">
            ${text}
          </p>
          <div class="icon">
            <span class="fas fa-quote-right"></span>
          </div>
        </div>`;
    })
    .join("");
};

document.addEventListener("DOMContentLoaded", () => {
  showPeople(people);
  leftBtn.addEventListener("click", () => {
    const prev = document.querySelector(".prev");
    const act = document.querySelector(".active");

    let next = act.nextElementSibling;

    if (next == null) {
      next = slideContainer.firstElementChild;
    }

    prev.classList.remove("prev");
    act.classList.remove("active");
    next.classList.remove("next");

    act.classList.add("next");
    prev.classList.add("active");

    next = prev.previousElementSibling;

    next.classList.add("prev");
  });

  rightBtn.addEventListener("click", () => {
    const prev = document.querySelector(".prev");
    const act = document.querySelector(".active");

    let next = act.nextElementSibling;

    if (next == null) {
      next = slideContainer.firstElementChild;
    }

    prev.classList.remove("prev");
    act.classList.remove("active");
    next.classList.remove("next");

    act.classList.add("prev");
    next.classList.add("active");
    prev.classList.add("next");
  });
});
