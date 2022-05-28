<<<<<<< Updated upstream
let counterValue = 0;

const refs = {
  btnDecrement: document.querySelector(`button[data-action = "decrement"]`),
  btnIncrement: document.querySelector(`button[data-action = "increment"]`),
  textValue: document.querySelector("#value"),
};

refs.btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  refs.textValue.textContent = counterValue;
});

refs.btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  refs.textValue.textContent = counterValue;
});
=======
// Создай переменную counterValue в которой будет храниться текущее
// значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или
// уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const decrement = document.querySelector("[data-action = 'decrement']");
const increment = document.querySelector("[data-action = 'increment']");
const val = document.querySelector("#value");

let counterValue = 0;

decrement.addEventListener("click", onDecrementClick);
increment.addEventListener("click", onIncrementClick);

function onIncrementClick() {
  counterValue += 1;
  val.textContent = +counterValue;
}

function onDecrementClick() {
  counterValue -= 1;
  val.textContent = +counterValue;
}
>>>>>>> Stashed changes
