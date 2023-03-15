import sublinks from "./data.js";

const hamBtn = document.querySelector(".ham-btn");
const closeModal = document.querySelector(".close-modal");

const submenu = document.querySelector(".submenu");

const modal = document.querySelector(".modal");

const pages = document.querySelectorAll(".page");

hamBtn.addEventListener("click", () => {
  modal.classList.remove("close");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("close");
});

hamBtn.addEventListener("mouseover", () => {
  console.log("Hover");
});

pages.forEach((p) => {
  p.addEventListener("click", function (e) {
    let linkName = e.currentTarget.textContent;
    let rect = e.currentTarget.getBoundingClientRect();

    console.log(sublinks);
    const tempPage = sublinks.find((link) => {
      if (link.page == linkName.toLowerCase()) {
        return link;
      }
    });

    const { page, links } = tempPage;

    const center = (rect.left + rect.right) / 2;
    const bottom = rect.bottom - 3;

    submenu.style.top = `${bottom}px`;
    submenu.style.left = `${center}px`;

    submenu.innerHTML = `<section> 
      <h4>${page}</h4>
      <div class="submenu-center">
      ${links
        .map((link) => {
          return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
        })
        .join("")}
      </div>
      </section>`;

    submenu.classList.add("show-submenu");
  });
});
