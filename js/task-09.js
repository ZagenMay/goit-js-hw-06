function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const color = document.querySelector(".color");
const buttonChanger = document.querySelector(".change-color");

buttonChanger.addEventListener("click", (event) => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
});
