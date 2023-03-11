const btnContainer = document.querySelector(".btns-container");

const displayButtons = (pages, index) => {
  btnContainer.innerHTML =
    `<div class="prev">Prev</div>` +
    pages
      .map((d, ind) => {
        if (index == ind) {
          return `<div class="page-btn active">${ind + 1}</div>`;
        }
        return `<div class="page-btn">${ind + 1}</div>`;
      })
      .join("") +
    `<div class="next">Next</div>`;
};

export default displayButtons;
