// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btnContainer = document.querySelector(".btn-container");

const switchElement = document.querySelector(".switch");

const videoElement = document.querySelector(".vid");

window.addEventListener("DOMContentLoaded", () => {
  btnContainer.addEventListener("click", () => {
    switchElement.classList.toggle("slide");
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  });
});
