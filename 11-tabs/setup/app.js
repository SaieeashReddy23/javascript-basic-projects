window.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".link");

  const matterContainer = document.querySelector(".matter-container");

  const matterList = document.querySelectorAll(".matter");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      let t = link.innerHTML;

      let ele = matterContainer.querySelector(`#${t.toLowerCase()}`);

      matterList.forEach((matter) => {
        if (matter === ele.parentElement) {
          matter.classList.add("show");
        } else {
          matter.classList.remove("show");
        }
      });

      links.forEach((l) => {
        if (l.innerHTML === link.innerHTML) {
          l.classList.add("presentLink");
        } else {
          l.classList.remove("presentLink");
        }
        console.log(link);
      });
    });
  });
});
