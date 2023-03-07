const itemsContainer = document.querySelector(".items-container");

const filterBtns = document.querySelectorAll(".filter-item");

const search = document.querySelector(".search");

const filterItemsByCompany = (company) => {
  let filteredProducts;

  if (company !== "All") {
    filteredProducts = products.filter(
      (p) => p.company === company.toLowerCase()
    );
  } else {
    filteredProducts = products;
  }

  itemsContainer.innerHTML = filteredProducts
    .map((p) => {
      const { id, title, image, price, company } = p;

      return `<div class="item">
            <img
              src=${image}
              alt=""
              class="item-img"
            />
            <div class="item-title">${title}</div>
            <div class="item-price">${price} $</div>
          </div>`;
    })
    .join("");
};

const filterItemByTitle = (text) => {
  let filteredProducts;

  if (text !== "") {
    filteredProducts = products.filter((p) => {
      if (p.title.includes(text)) {
        return true;
      }
    });
  } else {
    filteredProducts = products;
  }

  itemsContainer.innerHTML = filteredProducts
    .map((p) => {
      const { id, title, image, price, company } = p;

      return `<div class="item">
            <img
              src=${image}
              alt=""
              class="item-img"
            />
            <div class="item-title">${title}</div>
            <div class="item-price">${price} $</div>
          </div>`;
    })
    .join("");
};

window.addEventListener("DOMContentLoaded", () => {
  filterItemsByCompany("All");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      filterItemsByCompany(e.target.textContent);
    });
  });

  search.addEventListener("input", (e) => {
    filterItemByTitle(e.target.value);
  });
});
