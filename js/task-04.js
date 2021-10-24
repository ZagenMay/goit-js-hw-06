let counterValue = 0;

const OnDecrementClick = document.querySelector([
  'button[data-action="decrement"]',
]);
const OnIncrementClick = document.querySelector([
  'button[data-action="increment"]',
]);

OnDecrementClick.addEventListener("click", () => {
  counterValue -= 1;
  document.querySelector("#value").textContent = counterValue;
});

OnIncrementClick.addEventListener("click", () => {
  counterValue += 1;
  document.querySelector("#value").textContent = counterValue;
});
