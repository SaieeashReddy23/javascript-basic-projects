import { getElement } from "./utils.js";

const closeSidebar = getElement(".close-sidebar");
const toggleSidebar = getElement(".sidebar-toggle");
const sidebar = getElement(".sidebar");

closeSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});

toggleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});
