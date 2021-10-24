const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const refs = {
  ingredientsList: document.querySelector("#ingredients"),
};

const elements = ingredients.map((el) => {
  const ingredientList = document.createElement("li");
  ingredientList.classList.add("item");
  ingredientList.textContent = el;

  return ingredientList;
});

refs.ingredientsList.append(...elements);
