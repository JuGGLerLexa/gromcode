// const counterElem = document.querySelector('.counter');
// const counterValueElem = document.querySelector('.counter__value');

// const onCounterChange = e => {
//   const isButton = e.target.classList.contains('counter__button');

//   if (!isButton) {
//     return;
//   }
//   const action = e.target.dataset.action;

//   const oldValue = Number(counterValueElem.textContent);

//   const newValue = action === 'decrease';
//     ? oldValue - 1
//     : oldValue + 1;
// };

// counterElem.addEventListener('click', onCounterChange);

const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const onCounterChange = e => {
  const isButton = e.target.classList.contains('counter__button');

  if (!isButton) {
    return;
  }

  const { action } = e.target.dataset;

  const oldValue = Number(counterValueElem.textContent);

  const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;

  localStorage.setItem('counterValue', newValue);

  counterValueElem.textContent = newValue;
};

counterElem.addEventListener('click', onCounterChange);

const onStorageChange = e => {
  console.log(e);
  counterValueElem.textContent = e.newValue;
};

window.addEventListener('storage', onStorageChange);

const onDocumentLoaded = () => {
  counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
};

document.addEventListener('DOMContentLoaded', onDocumentLoaded);
