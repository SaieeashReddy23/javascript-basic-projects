function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    throw new Error(`pls check ${selector} selector , it doesnot exist`);
  }
}

class Counter {
  constructor(element, value) {
    this.element = element;
    this.value = value;
    this.valueElement = element.querySelector(".value");
    this.resetBtn = element.querySelector(".reset");
    this.increaseBtn = element.querySelector(".increase");
    this.decreaseBtn = element.querySelector(".decrease");

    this.reset = this.reset.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

    this.resetBtn.addEventListener("click", this.reset);
    this.increaseBtn.addEventListener("click", this.increment);
    this.decreaseBtn.addEventListener("click", this.decrement);
  }

  increment() {
    this.value++;
    this.valueElement.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueElement.textContent = this.value;
  }
  decrement() {
    this.value--;
    this.valueElement.textContent = this.value;
  }
}

const firstCounter = new Counter(getElement(".container-1"), 100);
const secondCounter = new Counter(getElement(".container-2"), 200);
