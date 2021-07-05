const inputs = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');
inputs.addEventListener('change', () => {
  // проверка на валидацию всех полей
  if (inputs.reportValidity()) submitBtn.removeAttribute('disabled');
});
// получение данных с формы для отправки на сервер
const emailElem = document.querySelector('.form-input[type=email]');
const nameElem = document.querySelector('.form-input[type=text]');
const passwordElem = document.querySelector('.form-input[type=password]');
// отправка данных на сервер
const baseUrl = 'https://60d8828beec56d0017477359.mockapi.io/api/v1/users';
let taskData;
const onSubmit = (event) => {
  event.preventDefault();
  taskData = {
    email: emailElem.value,
    firstName: nameElem.value,
    lastName: passwordElem.value,
  };
  console.log(taskData);
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  }).then((response) => response.json());
};
submitBtn.addEventListener('click', onSubmit());
onSubmit().then((response) => alert(response)); // вывод ответа сервера
