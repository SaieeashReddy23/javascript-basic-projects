const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const subTitle = document.querySelector(".sub-title");

window.addEventListener("DOMContentLoaded", () => {
  let ms = 864000 - 1;

  let date = new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000);
  let fDay = date.getDay();
  let fDate = date.getDate();
  let fMonth = date.getMonth();
  let fYear = date.getFullYear();

  let message = `Giveaway Ends On ${weekdays[fDay]}, ${fDate} ${months[fMonth]} ${fYear} 11:30am`;

  subTitle.innerHTML = message;

  setInterval(() => {
    let days = Math.floor(ms / 86400);
    let hours = Math.floor((ms % 86400) / 3600);
    let mins = Math.floor(((ms % 86400) % 3600) / 60);
    let secs = ((ms % 86400) % 3600) % 60;

    day.innerHTML = days;
    hour.innerHTML = hours;
    min.innerHTML = mins;
    sec.innerHTML = secs;
    ms--;
  }, 1000);
});
