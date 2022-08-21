const hex = document.querySelector(".hex");
const rgb = document.querySelector(".rgb");
const hsl = document.querySelector(".hsl");
const gradient = document.querySelector(".gradient");
let body = document.querySelector("body");
const text = document.getElementById("text");
const color = document.querySelector(".color");

const numArr = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f"
];

hex.addEventListener("click", () => {
  let str = "";
  for (let i = 0; i < 6; i++) {
    str += numArr[Math.floor(Math.random() * numArr.length)];
  }
  document.body.style.background = `#${str}`;
  text.innerHTML = `#${str}`;
  color.style.background = `#${str}`;
});

rgb.addEventListener("click", () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  //console.log(r);
  document.body.style.background = `rgb(${r},${g},${b})`;
  text.innerHTML = `rgb(${r},${g},${b})`;
  color.style.background = `rgb(${r},${g},${b})`;
});

hsl.addEventListener("click", () => {
  let h = Math.floor(Math.random() * 361);
  let s = Math.floor(Math.random() * 101);
  let l = Math.floor(Math.random() * 101);
  //console.log(r);
  document.body.style.background = `hsl(${h},${s}%,${l}%)`;
  text.innerHTML = `hsl(${h},${s}%,${l}%)`;
  color.style.background = `hsl(${h},${s}%,${l}%)`;
});

const gradientDirections = [
  "to bottom",
  "to top",
  "to right",
  "to left",
  "to top right",
  "to top left",
  "to bottom right",
  "to bottom left"
];
gradient.addEventListener("click", () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let r1 = Math.floor(Math.random() * 256);
  let g1 = Math.floor(Math.random() * 256);
  let b1 = Math.floor(Math.random() * 256);

  let color1 = `rgb(${r},${g},${b})`;
  let color2 = `rgb(${r1},${g1},${b1})`;

  let s = Math.floor(Math.random() * 101);
  let l = Math.floor(Math.random() * 101);

  let gradDir =
    gradientDirections[Math.floor(Math.random() * gradientDirections.length)];

  body.style.background = `linear-gradient(${gradDir},${color1} 0%,${color2} 100%)`;
  text.innerHTML = `linear-gradient(${gradDir},${color1} ${s}%,${color2} ${l}%)`;
  color.style.background = `linear-gradient(${gradDir},${color1} ${s}%,${color2} ${l}%)`;
});
