const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const title = document.querySelector(".title h1");

const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    title.textContent = "Pagination";
    return data;
  } catch (err) {
    console.log(err);
    title.textContent = "Sorry , Some error occured";
  }
};

export default fetchData;
