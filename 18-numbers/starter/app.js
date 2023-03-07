let items = document.querySelectorAll(".value");

const updateCount = (el) => {
  let id = parseInt(el.dataset.id);

  let increment = Math.ceil(id / 1000);

  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > id) {
      clearInterval(increaseCount);
      return;
    }

    el.textContent = `${initialValue}+`;
  }, 1);
};

items.forEach((item) => {
  updateCount(item);
});
