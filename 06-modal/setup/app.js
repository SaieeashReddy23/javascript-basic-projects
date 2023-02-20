// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalOpen = document.querySelector(".modal-open");

const modalClose = document.querySelector(".model-close");

const ModalContainer = document.querySelector(".modal-container");

modalOpen.addEventListener("click", () => {
  ModalContainer.classList.add("show-modal");
});

modalClose.addEventListener("click", () => {
  ModalContainer.classList.remove("show-modal");
});
