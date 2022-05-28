<<<<<<< Updated upstream
const rangeEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

rangeEl.addEventListener("input", onInputChangeRange);

function onInputChangeRange(event) {
  return (spanEl.style.fontSize = `${event.currentTarget.value}px`);
=======
// Напиши скрипт, который реагирует на изменение значения input#font-size-control
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

input.addEventListener("input", onChangeText);

function onChangeText() {
  text.style.fontSize = input.value + "px";
>>>>>>> Stashed changes
}
