const setDrink = (element) => {
  if (element) {
    element.addEventListener("click", (e) => {
      const id = e.target.parentElement.dataset.id;
      if (id) {
        localStorage.setItem("drink", id);
      }
    });
  }
};

export default setDrink;
