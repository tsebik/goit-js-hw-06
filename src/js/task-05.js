<<<<<<< Updated upstream
const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", OnInputSpan);

function OnInputSpan(event) {
  if (event.currentTarget.value === "") {
    return (outputEl.textContent = "Anonimus");
  }
  return (outputEl.textContent = event.currentTarget.value);
=======
// при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output.
//Если инпут пустой,
// в спане должна отображаться строка "Anonymous".

const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (input.value !== "") {
    span.textContent = event.currentTarget.value;
  } else {
    span.textContent = "Anonymous";
  }
>>>>>>> Stashed changes
}
