// Напиши скрипт, который изменяет цвета фона элемента <body>
// через инлайн стиль при клике на button.change-color
// и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

const btn = document.querySelector(".change-color");
const body = document.body;
const color = document.querySelector(".color");

btn.addEventListener("click", onInputChangeColor);

function onInputChangeColor() {
  const styleBody = (body.style.backgroundColor = getRandomHexColor());

  color.textContent = styleBody;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
