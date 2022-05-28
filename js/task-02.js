const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

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
