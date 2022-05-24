const formElem = document.querySelector('.login-form');
const submitBtnElem = document.querySelector('.submit-button');

const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users';

const onInputChange = () => {
  const isValidForm = formElem.reportValidity();
  if (isValidForm) {
    submitBtnElem.removeAttribute('disabled');
  } else {
    submitBtnElem.setAttribute('disabled', true);
  }
};

formElem.addEventListener('input', onInputChange);

const onFormSubmit = event => {
  event.preventDefault();

  const userData = Object.fromEntries(new FormData(formElem));

  // the same with reduce
  // const formData = [...new FormData(formElem)]
  //     .reduce((acc, [prop, value]) => ({ ...acc, [prop]: value }), {});

  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  })
    .then(response => response.json())
    .then(data => {
      alert(JSON.stringify(data));
      formElem.reset();
    });
};

formElem.addEventListener('submit', onFormSubmit);
