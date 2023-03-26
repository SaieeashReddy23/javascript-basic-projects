import { getElement } from "./utils.js";

const openSidebar = getElement(".toggle-nav");
const sidebar = getElement(".sidebar-overlay");
const closeSidebar = getElement(".sidebar-close");

openSidebar.addEventListener("click", () => {
  sidebar.classList.add("show");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("show");
});
