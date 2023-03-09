console.log("products starter");

const productsContainer = document.querySelector(".products-center");

const url = "https://course-api.com/javascript-store-products";

const fetchProducts = async () => {
  productsContainer.innerHTML = `<div class="loading"></div>`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    productsContainer.innerHTML = `<div class="error">There has been an error ....</div>`;
  }
};

function display(items) {
  const products = items
    .map((p) => {
      const id = p.id;
      const { company, price, name, image } = p.fields;

      return `<a href="./product.html?id=${id}" ><div class="product">
          <img src=${image[0].url} alt="" class="img" />
          <div class="product-info">
            <h3>${name}</h3>
            <h4>$${price}</h4>
          </div>
        </div></a>`;
    })
    .join("");

  productsContainer.innerHTML = products;
}

const start = async () => {
  const data = await fetchProducts();
  display(data);
};

start();
