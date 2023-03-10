import getElement from "./getElement.js";

const text = getElement(".text");
const value = getElement(".value");
const img = getElement(".image");

const iconsContainer = getElement(".icons");
const icons = [...document.querySelectorAll(".icon")];

const display = async (person) => {
  img.src = person.url;
  text.textContent = "My name is";
  value.textContent = `${person.firstName} ${person.lastName}`;

  const active = document.querySelector(".active");
  if (active) {
    active.classList.remove("active");
  }
  iconsContainer.firstElementChild.classList.add("active");

  icons.forEach((icon) => {
    const label = icon.dataset.label;
    icon.addEventListener("click", () => {
      const activeNow = getElement(".active");
      activeNow.classList.remove("active");

      switchLogic(label, person);
      icon.classList.add("active");
    });
  });
};

const switchLogic = (label, person) => {
  switch (label) {
    case "name":
      text.textContent = "My name is";
      value.textContent = `${person.firstName} ${person.lastName}`;
      break;
    case "email":
      text.textContent = "My email is";
      value.textContent = `${person.email}`;
      break;
    case "age":
      text.textContent = "My age is";
      value.textContent = `${person.age}`;
      break;
    case "street":
      text.textContent = "My street is";
      value.textContent = `${person.streetNumber} ${person.streetName}`;
      break;
    case "phone":
      text.textContent = "My phone is";
      value.textContent = `${person.phone}`;
      break;
    case "password":
      text.textContent = "My password is";
      value.textContent = `${person.password} `;
      break;

    default:
      text.textContent = "----------------";
      value.textContent = "--------------";

      break;
  }
};

export default display;
