const baseUrl = 'https://6294ab7e63b5d108c190df45.mockapi.io/api/v1/users';

const formEl = document.querySelector('.login-form');
const submitButton = document.querySelector('.submit-button');
const emailInp = document.querySelector('.form-input[type="email"]');
const textInp = document.querySelector('.form-input[type="text"]');
const passwordInp = document.querySelector('.form-input[type="password"]');
const errorTextEl = document.querySelector('.error-text');

const createUser = newUser =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(newUser),
  });

const onChange = () => {
  if (emailInp.reportValidity() && textInp.reportValidity() && passwordInp.reportValidity()) {
    submitButton.disabled = false;
  }

  errorTextEl.textContent = '';
};

const onSubmitForm = event => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(formEl));

  createUser(formData)
    .then(response => response.json())
    .then(data => {
      alert(JSON.stringify(data));
      formEl.reset();
    })
    .catch(() => {
      errorTextEl.textContent = 'Failed to create user';
    });
};

emailInp.addEventListener('input', onChange);
textInp.addEventListener('input', onChange);
passwordInp.addEventListener('input', onChange);

formEl.addEventListener('submit', onSubmitForm);
