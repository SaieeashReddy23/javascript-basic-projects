// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const img = document.querySelector(".photo");
const personName = document.querySelector(".name");
const job = document.querySelector(".job");
const text = document.querySelector(".text");

const left = document.querySelector(".left");
const right = document.querySelector(".right");

const btn = document.querySelector(".btn");

let pos = 0;

img.setAttribute("src", reviews[pos].img);
personName.innerHTML = reviews[pos].name;
job.innerHTML = reviews[pos].job;
text.innerHTML = reviews[pos].text;

left.addEventListener("click", () => {
  if (pos == 0) {
    pos = 3;
  } else {
    pos--;
  }
  img.setAttribute("src", reviews[pos].img);
  personName.innerHTML = reviews[pos].name;
  job.innerHTML = reviews[pos].job;
  text.innerHTML = reviews[pos].text;
});

right.addEventListener("click", () => {
  if (pos == 3) {
    pos = 0;
  } else {
    pos++;
  }
  img.setAttribute("src", reviews[pos].img);
  personName.innerHTML = reviews[pos].name;
  job.innerHTML = reviews[pos].job;
  text.innerHTML = reviews[pos].text;
});

btn.addEventListener("click", () => {
  let val = Math.floor(Math.random() * 4);

  img.setAttribute("src", reviews[val].img);
  personName.innerHTML = reviews[val].name;
  job.innerHTML = reviews[val].job;
  text.innerHTML = reviews[val].text;
});
