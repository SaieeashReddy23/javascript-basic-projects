function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

class Photo {
  constructor(id, src, title) {
    this.id = id;
    this.src = src;
    this.title = title;
  }
}

const photos = document.querySelectorAll(".photo");
const closebtn = document.querySelector(".close-btn");
const mainImg = document.querySelector(".main-img");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const subTitle = document.querySelector(".sub-title");
const modelSubContainer = document.querySelector(".modal-sub-images-container");

let subImages = [];

function setNaturesubModals(ps) {
  modelSubContainer.innerHTML = `
          <img
          src="./images/nature-1.jpeg"
          alt="nature-1"
          title="nature-1"
          data-id="1"
          class="sub-image"
        />
        <img
          src="./images/nature-2.jpeg"
          alt="nature-2"
          title="nature-2"
          data-id="2"
          class="sub-image"
        />
        <img
          src="./images/nature-3.jpeg"
          alt="nature-3"
          title="nature-3"
          data-id="3"
          class="sub-image"
        />`;

  subImages = modelSubContainer.querySelectorAll(".sub-image");
  subImages.forEach((sub) => {
    if (sub.dataset.id == ps.id) {
      sub.classList.add("selected");
    }
  });
}

function setCitySubModals(ps) {
  modelSubContainer.innerHTML = `
          <img
          src="./images/city-1.jpeg"
          alt="city-1"
          title="city-1"
          data-id="1"
          class="sub-image"
        />
        <img
          src="./images/city-2.jpeg"
          alt="city-2"
          title="city-2"
          data-id="2"
          class="sub-image"
        />
        <img
          src="./images/city-3.jpeg"
          alt="city-3"
          title="city-3"
          data-id="3"
          class="sub-image"
        />
        <img
          src="./images/city-4.jpeg"
          alt="city-4"
          title="city-4"
          data-id="4"
          class="sub-image"
        />
        <img
          src="./images/city-5.jpeg"
          alt="city-5"
          title="city-5"
          data-id="5"
          class="sub-image"
        />`;

  subImages = modelSubContainer.querySelectorAll(".sub-image");
  subImages.forEach((sub) => {
    sub.addEventListener("click", (e) => {
      console.log("SubImage is clicked");
      mainImg.src = e.target.src;
      mainImg.dataset.id = e.target.dataset.id;
      subTitle.innerHTML = e.target.title;
    });
    if (sub.dataset.id == ps.id) {
      sub.classList.add("selected");
    }
  });
}

function closeModal() {
  modal.classList.remove("open");
  nature.classList.remove("close");
  city.classList.remove("close");
}

photos.forEach((photo) => {
  photo.addEventListener("click", (e) => {
    const ps = new Photo(e.target.dataset.id, e.target.src, e.target.title);
    mainImg.src = ps.src;
    subTitle.innerHTML = ps.title;
    mainImg.dataset.id = ps.id;

    if (ps.title.includes("nature")) {
      setNaturesubModals(ps);
      console.log("its a nature");
    }

    if (ps.title.includes("city")) {
      setCitySubModals(ps);
    }

    console.log(e.target.src);
    modal.classList.add("open");
    nature.classList.add("close");
    city.classList.add("close");
  });
});

function slidePrev(e) {
  let id = parseInt(mainImg.dataset.id);
  subImages = modelSubContainer.querySelectorAll(".sub-image");

  let totalSubImages = subImages.length;
  let prevId;

  if (id == 1) {
    prevId = totalSubImages;
  } else {
    prevId = id - 1;
  }

  subImages.forEach((sub) => {
    sub.addEventListener("click", (e) => {
      console.log("SubImage is clicked");
      mainImg.src = e.target.src;
      mainImg.dataset.id = e.target.dataset.id;
      subTitle.innerHTML = e.target.title;
    });

    if (sub.dataset.id == prevId) {
      mainImg.src = sub.src;
      mainImg.dataset.id = prevId;
      subTitle.innerHTML = sub.title;
      sub.classList.add("selected");
    } else {
      sub.classList.remove("selected");
    }
  });

  console.log(subImages);
}

function slideNext(e) {
  let id = parseInt(mainImg.dataset.id);
  subImages = modelSubContainer.querySelectorAll(".sub-image");

  let totalSubImages = subImages.length;
  let nextId;

  if (id == totalSubImages) {
    nextId = 1;
  } else {
    nextId = id + 1;
  }

  subImages.forEach((sub) => {
    sub.addEventListener("click", (e) => {
      console.log("SubImage is clicked");
      mainImg.src = e.target.src;
      mainImg.dataset.id = e.target.dataset.id;
      subTitle.innerHTML = e.target.title;
    });
    if (sub.dataset.id == nextId) {
      mainImg.src = sub.src;
      mainImg.dataset.id = nextId;
      subTitle.innerHTML = sub.title;
      sub.classList.add("selected");
    } else {
      sub.classList.remove("selected");
    }
  });
  console.log(subImages);
}

closebtn.addEventListener("click", closeModal);

prevBtn.addEventListener("click", slidePrev);
nextBtn.addEventListener("click", slideNext);

const nature = getElement(".nature-container");
const city = getElement(".city-container");
const modal = getElement(".modal-container");
