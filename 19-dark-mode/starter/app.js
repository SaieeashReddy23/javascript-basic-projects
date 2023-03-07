const btn = document.querySelector(".btn");
const articlesElement = document.querySelector(".articles");

btn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});

const articleEle = articles
  .map((article) => {
    const { id, title, date, length, snippet } = article;

    let d = moment(date).format("MMMM Do YYYY");

    const art = ` <article class="post">
          <h1 class="title">${title}</h1>
          <div class="info" data-id="1">
            <span class="date">${d}</span>
            <span class="read-time">${length} min read</span>
          </div>
          <div class="content">
           ${snippet}
          </div>
        </article>`;
    return art;
  })
  .join("");

articlesElement.innerHTML = articleEle;
