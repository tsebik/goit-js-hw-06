<<<<<<< Updated upstream
const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlurColor);

function onInputBlurColor(event) {
  if (event.currentTarget.value.length == inputEl.dataset.length) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
    return inputEl;
  }
  inputEl.classList.remove("valid");
  inputEl.classList.add("invalid");
  return inputEl;
=======
// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте,
// указывается в его атрибуте data-length.
// Если введено подходящее количество символов,
// то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.

const input = document.querySelector("#validation-input");
const length = document.querySelector('[data-length="6"]');

const lengthSymbol = length.dataset.length;

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  event.preventDefault();
  if (input.value.length < lengthSymbol || input.value.length > lengthSymbol) {
    input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
>>>>>>> Stashed changes
}
