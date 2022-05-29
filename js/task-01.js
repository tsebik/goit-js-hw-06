const numbersLiItemEl = document.querySelectorAll("#categories li.item");
const calculateQuantityCategories = (item) => {
  console.log(`Number of categories : ${item.length}`);
};

calculateQuantityCategories(numbersLiItemEl);

const calculateQuantityItem = (itemEl) => {
  itemEl.forEach((elem) => {
    const heding = elem.firstElementChild.textContent;
    const liLenght = elem.lastElementChild.children.length;
    console.log(`Category: ${heding}`);
    console.log(`Elements: ${liLenght}`);
  });
};

calculateQuantityItem(numbersLiItemEl);
