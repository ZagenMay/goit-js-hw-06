const size = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

size.addEventListener("input", (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
});
