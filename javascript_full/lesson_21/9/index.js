export const finishForm = () => {
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'login';
  document.querySelector('.login-form').prepend(input);

  const futureInput = document.querySelector('[name = password]');
  futureInput.type = 'password';
};

finishForm();
