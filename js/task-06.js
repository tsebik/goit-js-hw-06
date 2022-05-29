const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlurColor);

function onInputBlurColor(event) {
  if (event.currentTarget.value.length === inputEl.dataset.length) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
    return inputEl;
  }
  inputEl.classList.remove("valid");
  inputEl.classList.add("invalid");
  return inputEl;
}
