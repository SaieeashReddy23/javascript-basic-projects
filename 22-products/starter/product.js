const url = "https://course-api.com/javascript-store-single-product";

const productCenter = document.querySelector(".product-center");

const fetchProduct = async () => {
  productCenter.innerHTML = ` <div class="loading"></div>`;
  try {
    console.log(window.location.search);

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    return data;
  } catch (err) {
    productCenter.innerHTML = `<div class="error">An error occured ....</div>`;
  }
};

const displayProduct = (data) => {
  const id = data.id;
  const { price, name, description, company, colors } = data.fields;
  const url = data.fields.image[0].url;

  const col = colors
    .map((c) => {
      return `<span class="color" style="background: ${c};"></span>`;
    })
    .join("");

  productCenter.innerHTML = ` <div class="product-container">
        <div class="product-img">
          <img
            src="${url}"
            alt=""
            class="img"
          />
        </div>
        <div class="product-info">
          <h3>${name}</h3>
          <h4>${company}</h4>
          <p>$ ${price}</p>
          <div class="colors-container">
          ${col}
          </div>
          <p>
           ${description}
          </p>

          <button class="btn">Add to Cart</button>
        </div>
      </div>`;

  // const colorsContainer = productCenter.querySelector(".colors-container");
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
