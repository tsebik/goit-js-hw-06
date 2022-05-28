const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

<<<<<<< Updated upstream
const ul = document.querySelector("#ingredients");

ingredients.forEach((el) => {
  const li = document.createElement("li");
  li.textContent = el;
  li.classList.add("item");
  ul.append(li);
});
=======
const listEl = document.querySelector("#ingredients");

const makeIngredients = (items) => {
  const el = items.map((item) => {
    const itemsEl = document.createElement("li");
    itemsEl.classList.add("item");
    itemsEl.textContent = item;
    return itemsEl;
  });
  return listEl.append(...el);
};

makeIngredients(ingredients);
>>>>>>> Stashed changes
