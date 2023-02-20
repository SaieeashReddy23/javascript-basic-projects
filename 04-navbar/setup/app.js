const navbar = document.querySelector(".navbar");

const btn = document.querySelector(".icon");

btn.addEventListener("click", () => {
  navbar.classList.toggle("show-links");
});
