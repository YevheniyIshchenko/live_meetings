const baseUrl = 'https://60c9e9df772a760017204c05.mockapi.io/api/v1/form';
const buttonElement = document.querySelector('.submit-button');
const formElement = document.querySelector('.login-form');
const errorElement = document.querySelector('.error-text');

const getFormData = () => Object.fromEntries(new FormData(formElement));

const validateHendler = () => {
  buttonElement.disabled = !formElement.reportValidity();
};

const submitHendler = (event) => {
  event.preventDefault();

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;',
    },
    body: JSON.stringify(getFormData()),
  })
    .then((response) => response.json())
    .then((response) => {
      alert(JSON.stringify(response));
      formElement.reset();
    })
    .catch(() => {
      errorElement.textContent = 'Failed to create user';
    });
};

formElement.addEventListener('input', validateHendler);
formElement.addEventListener('submit', submitHendler);
