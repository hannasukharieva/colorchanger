const button = document.querySelector(".button--main");
const body = document.querySelector("body");
const colors = ['#6fb1f5', '#6ecc6e', '#a4c53f', '#e08cea'];

button.addEventListener("click", changeColor)

function changeColor() {
  const colorIndex = Math.floor(Math.random()*colors.length);
  body.style.backgroundColor = colors[colorIndex];
}