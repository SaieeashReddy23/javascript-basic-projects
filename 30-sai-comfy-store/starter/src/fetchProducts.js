import { allProductsUrl } from "./utils.js";

const fetchProducts = async () => {
  const response = await fetch(allProductsUrl).catch((err) => {
    console.log(err);
  });
  if (response.status >= 200 && response.status <= 299) {
    return response.json();
  }
  return response;
};

export default fetchProducts;
