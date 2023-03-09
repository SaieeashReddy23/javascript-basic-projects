const btn = document.querySelector(".btn");

const result = document.querySelector(".result");

const url = "https://icanhazdadjoke.com/";

btn.addEventListener("click", async () => {
  result.textContent = "Loading....";
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "user-Agent": "learning app",
      },
    });

    if (!response.ok) {
      throw new Error("some error occured");
    }

    const data = await response.json();
    display(data.joke);
  } catch (err) {
    console.log(err);
    result.textContent = "Some error occured";
  }
});

function display(joke) {
  result.textContent = joke;
}
