import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupCompanies = (store) => {
  const companiesDom = getElement(".companies");
  const companies = ["all", ...new Set(store.map((prod) => prod.company))];

  companiesDom.innerHTML = companies
    .map((comp) => {
      return ` <button class="company-btn">${comp}</button>`;
    })
    .join("");

  companiesDom.addEventListener("click", (e) => {
    const company = e.target.textContent;

    const newCompanies = store.filter((prod) => prod.company === company);

    if (company == "all") {
      display([...store], getElement(".products-container"));
    } else {
      display(newCompanies, getElement(".products-container"));
    }
  });
};

export default setupCompanies;
