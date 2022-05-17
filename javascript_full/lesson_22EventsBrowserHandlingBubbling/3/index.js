const inputElem = document.querySelector('.text-input');

function inputText() {
  console.log(inputElem.value);
}

inputElem.addEventListener('change', inputText);
