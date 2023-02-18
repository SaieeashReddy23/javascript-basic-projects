const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".flipper-btn");

const val = document.querySelector(".value");

const hero = document.querySelector(".hero");
console.log(hero);

function randomColor() {
  let h1 = Math.floor(Math.random() * 12);
  let h2 = Math.floor(Math.random() * 12);
  let h3 = Math.floor(Math.random() * 12);
  let h4 = Math.floor(Math.random() * 12);
  let h5 = Math.floor(Math.random() * 12);
  let h6 = Math.floor(Math.random() * 12);
  let color = `#${hex[h1]}${hex[h2]}${hex[h3]}${hex[h4]}${hex[h5]}${hex[h6]}`;
  return color;
}

randomColor();

btn.addEventListener("click", (e) => {
  let color = randomColor();
  val.innerHTML = color;
  hero.style.backgroundColor = color;
});
