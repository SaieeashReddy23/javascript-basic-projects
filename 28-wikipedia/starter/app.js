const url =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";

const formContainer = document.querySelector(".form-input");
const resultsContainer = document.querySelector(".results-container");

const fetchData = async (dataUrl) => {
  try {
    const response = await fetch(dataUrl);
    const data = await response.json();

    const result = data.query.search;
    return result;
  } catch (err) {
    console.log("some error occured");
  }
};

const display = (data) => {
  console.log(data);

  resultsContainer.innerHTML = data
    .map(({ title, pageid: id, snippet }) => {
      return `<a href="https://en.wikipedia.org/?curid=${id}" target="_blank" class="result">
          <div class="result-header">${title}</div>
          <p class="text">
            ${snippet}
          </p>
        </a>`;
    })
    .join("");
};

formContainer.addEventListener("submit", async (e) => {
  e.preventDefault();
  let val = e.target.firstElementChild.value;
  const data = await fetchData(`${url}${val}`);
  display(data);
});
