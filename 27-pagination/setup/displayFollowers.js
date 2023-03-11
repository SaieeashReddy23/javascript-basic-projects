const profilesContainer = document.querySelector(".profiles-container");

const display = (data) => {
  profilesContainer.innerHTML = data
    .map((d) => {
      const { avatar_url: imgUrl, html_url: url, login: name } = d;
      return `  <div class="profile">
          <img
            src=${imgUrl}
            alt=""
            class="image"
          />
          <div class="name">${name}</div>
          <a href=${url} class="profile-btn"
            >View Profile</a
          >
        </div>`;
    })
    .join("");
};

export default display;
