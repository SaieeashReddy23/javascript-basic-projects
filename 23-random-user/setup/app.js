import getUser from "./utils/fetchUser.js";

import display from "./utils/displayUser.js";

import getElement from "./utils/getElement.js";

const btn = getElement(".btn");

const start = async () => {
  const data = await getUser();
  display(data);
};

btn.addEventListener("click", async () => {
  const data = await getUser();
  display(data);
});

start();
