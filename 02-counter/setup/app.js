const val = document.querySelector(".value");

const decrease = document.querySelector(".decrease");

const reset = document.querySelector(".reset");

const increase = document.querySelector(".increase");

let value = 0;

decrease.addEventListener("click", (e) => {
  value--;
  val.innerHTML = value;
  if (value < 0) {
    val.style.color = "red";
  } else if (value > 0) {
    val.style.color = "green";
  } else {
    val.style.color = "black";
  }
});

reset.addEventListener("click", (e) => {
  value = 0;
  val.innerHTML = value;
  if (value < 0) {
    val.style.color = "red";
  } else if (value > 0) {
    val.style.color = "green";
  } else {
    val.style.color = "black";
  }
});

increase.addEventListener("click", (e) => {
  value++;
  val.innerHTML = value;
  if (value < 0) {
    val.style.color = "red";
  } else if (value > 0) {
    val.style.color = "green";
  } else {
    val.style.color = "black";
  }
});
