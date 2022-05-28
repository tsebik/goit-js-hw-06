const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", OnFormSubmit);

function OnFormSubmit(event) {
  event.preventDefault();
  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    return alert("Внимание ❗ Все поля должны быть заполнены");
  }

  const mail = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const formData = { mail, password };
  console.log(formData);
  event.currentTarget.reset();

  return formData;
}
