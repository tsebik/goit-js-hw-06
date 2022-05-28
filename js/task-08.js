<<<<<<< Updated upstream
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
=======
// 1. Обработка отправки формы form.login-form должна быть по событию submit.
// 2. При отправке формы страница не должна перезагружаться.
// 3. Если в форме есть незаполненные поля,
//    выводи alert с предупреждением о том, что все поля должны быть заполнены.
// 4. Если пользователь заполнил все поля и отправил форму,
//    собери значения полей в обьект, где имя поля будет именем свойства,
//    а значение поля - значением свойства.
//    Для доступа к элементам формы используй свойство elements.
// 5. Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    email,
    password,
  };
  if (email === "") {
    return alert("Все поля должны быть заполнены");
  } else if (password === "") {
    return alert("Все поля должны быть заполнены");
  } else {
    formData;
  }
  console.log(formData);
  document.querySelector(".login-form").reset();
>>>>>>> Stashed changes
}
