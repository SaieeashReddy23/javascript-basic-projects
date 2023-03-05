function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

class Gallery {
  constructor(element) {
    this.container = element;
    this.list = [...element.querySelectorAll(".photo")];

    //target
    this.modal = getElement(".modal-container");
    this.modalImg = getElement(".main-img");
    this.title = getElement(".sub-title");
    this.modalImages = getElement(".modal-sub-images-container");
    this.closeBtn = getElement(".close-btn");
    this.prevBtn = getElement(".prev-btn");
    this.nextBtn = getElement(".next-btn");

    //bind
    this.selectedImage = this.selectedImage.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.chooseImage = this.chooseImage.bind(this);

    this.container.addEventListener(
      "click",
      function (e) {
        if (e.target.classList.contains("photo")) {
          this.openModal(e.target, this.list);
        }
      }.bind(this)
    );
  }

  selectedImage = function (img) {
    this.modalImg.src = img.src;
    this.modalImg.dataset.id = img.dataset.id;
    this.title.innerHTML = img.title;
  };

  openModal = function (selectedImage, list) {
    //   this.modalImg.src = selectedImage.src;
    //   this.modalImg.dataset.id = selectedImage.dataset.id;
    //   this.title.innerHTML = selectedImage.title;
    this.selectedImage(selectedImage);

    this.modalImages.innerHTML = list
      .map((image) => {
        if (image.dataset.id === selectedImage.dataset.id) {
          console.log("found the id");
        }
        return `     <img
          src=${image.src}
          alt=${image.alt}
          title=${image.title}
          data-id=${image.dataset.id}
          class="${
            image.dataset.id === selectedImage.dataset.id
              ? "sub-image selected"
              : "sub-image"
          }"
        />`;
      })
      .join("");

    this.modal.classList.add("open");

    this.closeBtn.addEventListener("click", this.closeModal);
    this.nextBtn.addEventListener("click", this.nextImage);
    this.prevBtn.addEventListener("click", this.prevImage);
    this.modalImages.addEventListener("click", this.chooseImage);
  };

  closeModal = function () {
    this.modal.classList.remove("open");

    this.closeBtn.removeEventListener("click", this.closeModal);
    this.nextBtn.removeEventListener("click", this.nextImage);
    this.prevBtn.removeEventListener("click", this.prevImage);
    this.modalImages.removeEventListener("click", this.chooseImage);
  };

  nextImage = function () {
    const selected = this.modalImages.querySelector(".selected");
    const next =
      selected.nextElementSibling || this.modalImages.firstElementChild;

    selected.classList.remove("selected");
    next.classList.add("selected");

    this.selectedImage(next);

    //   this.modalImg.src = next.src;
    //   this.title.innerHTML = next.title;
    //   this.modalImg.dataset.id = next.dataset.id;
  };

  prevImage = function () {
    const selected = this.modalImages.querySelector(".selected");
    const prev =
      selected.previousElementSibling || this.modalImages.lastElementChild;

    selected.classList.remove("selected");
    prev.classList.add("selected");

    this.selectedImage(prev);
    //   this.modalImg.src = prev.src;
    //   this.title.innerHTML = prev.title;
    //   this.modalImg.dataset.id = prev.dataset.id;
  };

  chooseImage = function (e) {
    if (e.target.classList.contains("sub-image")) {
      const selected = this.modalImages.querySelector(".selected");
      selected.classList.remove("selected");

      this.selectedImage(e.target);

      e.target.classList.add("selected");
    }
  };
}

// function Gallery(element) {
//   this.container = element;
//   this.list = [...element.querySelectorAll(".photo")];

//   //target
//   this.modal = getElement(".modal-container");
//   this.modalImg = getElement(".main-img");
//   this.title = getElement(".sub-title");
//   this.modalImages = getElement(".modal-sub-images-container");
//   this.closeBtn = getElement(".close-btn");
//   this.prevBtn = getElement(".prev-btn");
//   this.nextBtn = getElement(".next-btn");

//   //bind
//   this.selectedImage = this.selectedImage.bind(this);
//   this.openModal = this.openModal.bind(this);
//   this.closeModal = this.closeModal.bind(this);
//   this.nextImage = this.nextImage.bind(this);
//   this.prevImage = this.prevImage.bind(this);
//   this.chooseImage = this.chooseImage.bind(this);

//   this.container.addEventListener(
//     "click",
//     function (e) {
//       if (e.target.classList.contains("photo")) {
//         this.openModal(e.target, this.list);
//       }
//     }.bind(this)
//   );
// }

// Gallery.prototype.selectedImage = function (img) {
//   this.modalImg.src = img.src;
//   this.modalImg.dataset.id = img.dataset.id;
//   this.title.innerHTML = img.title;
// };

// Gallery.prototype.openModal = function (selectedImage, list) {
//   //   this.modalImg.src = selectedImage.src;
//   //   this.modalImg.dataset.id = selectedImage.dataset.id;
//   //   this.title.innerHTML = selectedImage.title;
//   this.selectedImage(selectedImage);

//   this.modalImages.innerHTML = list
//     .map((image) => {
//       if (image.dataset.id === selectedImage.dataset.id) {
//         console.log("found the id");
//       }
//       return `     <img
//           src=${image.src}
//           alt=${image.alt}
//           title=${image.title}
//           data-id=${image.dataset.id}
//           class="${
//             image.dataset.id === selectedImage.dataset.id
//               ? "sub-image selected"
//               : "sub-image"
//           }"
//         />`;
//     })
//     .join("");

//   this.modal.classList.add("open");

//   this.closeBtn.addEventListener("click", this.closeModal);
//   this.nextBtn.addEventListener("click", this.nextImage);
//   this.prevBtn.addEventListener("click", this.prevImage);
//   this.modalImages.addEventListener("click", this.chooseImage);
// };

// Gallery.prototype.closeModal = function () {
//   this.modal.classList.remove("open");

//   this.closeBtn.removeEventListener("click", this.closeModal);
//   this.nextBtn.removeEventListener("click", this.nextImage);
//   this.prevBtn.removeEventListener("click", this.prevImage);
//   this.modalImages.removeEventListener("click", this.chooseImage);
// };

// Gallery.prototype.nextImage = function () {
//   const selected = this.modalImages.querySelector(".selected");
//   const next =
//     selected.nextElementSibling || this.modalImages.firstElementChild;

//   selected.classList.remove("selected");
//   next.classList.add("selected");

//   this.selectedImage(next);

//   //   this.modalImg.src = next.src;
//   //   this.title.innerHTML = next.title;
//   //   this.modalImg.dataset.id = next.dataset.id;
// };

// Gallery.prototype.prevImage = function () {
//   const selected = this.modalImages.querySelector(".selected");
//   const prev =
//     selected.previousElementSibling || this.modalImages.lastElementChild;

//   selected.classList.remove("selected");
//   prev.classList.add("selected");

//   this.selectedImage(prev);
//   //   this.modalImg.src = prev.src;
//   //   this.title.innerHTML = prev.title;
//   //   this.modalImg.dataset.id = prev.dataset.id;
// };

// Gallery.prototype.chooseImage = function (e) {
//   if (e.target.classList.contains("sub-image")) {
//     const selected = this.modalImages.querySelector(".selected");
//     selected.classList.remove("selected");

//     this.selectedImage(e.target);

//     e.target.classList.add("selected");
//   }
// };

const nature = new Gallery(getElement(".nature-container"));
const city = new Gallery(getElement(".city-container"));
