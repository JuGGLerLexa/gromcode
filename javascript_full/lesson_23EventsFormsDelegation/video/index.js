const emailInputEl = document.querySelector('#email');
const passwordInputEl = document.querySelector('#password');

const emailError = document.querySelector('.error-text_email');
const passwordError = document.querySelector('.error-text_password');

const form = document.querySelector('.login-form');

const isRequired = value => (value ? undefined : 'Required');

const isEmail = value => (value.includes('@') ? undefined : 'Should be an email');

const validators = {
  email: [isRequired, isEmail],
  password: [isRequired],
};

const validator = (inputName, value) => {
  const arr = validators[inputName];
  return arr
    .map(valid => valid(value))
    .filter(err => err)
    .join(', ');
};

const onEmailChange = event => {
  const errText = validator('email', event.target.value);
  emailError.textContent = errText;
};

const onPassChange = event => {
  const errText = validator('password', event.target.value);
  passwordError.textContent = errText;
};

emailInputEl.addEventListener('input', onEmailChange);
passwordInputEl.addEventListener('input', onPassChange);

const formSubmit = event => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(form));
  alert(JSON.stringify(formData));
};

form.addEventListener('submit', formSubmit);
