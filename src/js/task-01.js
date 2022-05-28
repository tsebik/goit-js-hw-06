const NumberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${NumberOfCategories.length}`);

NumberOfCategories.forEach((el) => {
  const category = el.children[0].textContent;
  console.log(`Category: ${category}`);
  const elements = el.querySelectorAll("li");
  console.log(`Elements: ${elements.length}`);
});
