const numbersLiItemEl = document.querySelectorAll("#categories li.item");
const calculateQuantityCategories = (item) => {
  console.log(`Number of categories : ${item.length}`);
};

calculateQuantityCategories(numbersLiItemEl);

const calculateQuantityItem = (itemEl) => {
  itemEl.forEach((elem) => {
    const heding = elem.querySelector("h2").textContent;
    const liLenght = elem.querySelector("ul").querySelectorAll("li").length;
    console.log(`Category: ${heding}`);
    console.log(`Elements: ${liLenght}`);
  });
};

calculateQuantityItem(numbersLiItemEl);
