const hamBtn = document.querySelector(".ham-icon");

const closeBtn = document.querySelector(".cross-icon");

const sideBar = document.querySelector(".side-bar");

hamBtn.addEventListener("click", () => {
  sideBar.classList.toggle("show-side-bar");
});

closeBtn.addEventListener("click", () => {
  sideBar.classList.toggle("show-side-bar");
});
