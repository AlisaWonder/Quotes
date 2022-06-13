// local reviews data
const reviews = [
  {
    id: 1,
    name: "Richard P. Feynman",
    job: "theoretical physicist",
    img: "./assets/RichardFeynman.png",
    text: "Physics is like sex: sure, it may give some practical results, but that's not why we do it.",
  },
  {
    id: 2,
    name: "Merce Cunningham",
    job: "Dancer and choreographer",
    img: "./assets/mercecunningham.png",
    text: "You have to love dancing to stick to it. It gives you nothing back, no manuscripts to store away, no paintings to show on walls and maybe hang in museums, no poems to be printed and sold, nothing but that single fleeting moment when you feel alive.",
  },
  {
    id: 3,
    name: "Charles Darwin",
    job: "naturalist, geologist and biologis",
    img: "./assets/Charles_Darwi.jpg",
    text: "The highest possible stage in moral culture is when we recognize that we ought to control our thoughts.",
  },
  {
    id: 4,
    name: "Richard Dawkins",
    job: "British evolutionary biologist and author",
    img: "./assets/Richard_Dawkins.jpg",
    text: "The universe we observe has precisely the properties we should expect if there is, at bottom, no design, no purpose, no evil, no good, nothing but blind, pitiless indifference.",
  },
];

const img = document.getElementById("person-img");
const author = document.querySelector(".author");
const job = document.querySelector(".job");
const info = document.querySelector(".info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
console.log(img, author, job, info, prevBtn, nextBtn, randomBtn);

let currentItem = 0;

// when loaded
window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

// person based on item
showPerson = () => {
  const item = reviews[currentItem];
  img.src = item.img;
  author.innerHTML = item.name;
  job.innerHTML = item.job;
  info.innerHTML = item.text;
};

//next person
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = 3;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * 4);
  showPerson(currentItem);
});
