import { getStorageItem, setStorageItem } from "./utils.js";
let store = [];

store = getStorageItem("store");

const setupStore = (products) => {
  store = products.map((prod) => {
    const {
      id,
      fields: { company, colors, featured, price, name, image: img },
    } = prod;
    const image = img[0].thumbnails.large.url;
    return { id, company, colors, featured, price, name, image };
  });
  setStorageItem("store", store);
};
const findProduct = (id) => {
  const product = store.find((p) => p.id == id);
  return product;
};
export { store, setupStore, findProduct };
