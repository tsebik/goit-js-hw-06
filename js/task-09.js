<<<<<<< Updated upstream
const buttonEl = document.querySelector(".change-color");

const textEl = document.querySelector(".color");

const bodyEl = document.querySelector("body");

buttonEl.addEventListener("click", OnButtonChangeColor);
=======
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
>>>>>>> Stashed changes

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function OnButtonChangeColor(param) {
  textEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = textEl.textContent;
}
