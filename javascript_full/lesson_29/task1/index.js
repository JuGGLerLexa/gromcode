// addImage

const buttonElem = document.querySelector('#button');

buttonElem.addEventListener('click', () => console.log('Click'));

let sum = 0;
const startTime = new Date();
console.log('Cecle started');
for (let i = 0; i < 5e9; i += 1) {
  sum += 1;
}
const endTime = new Date();
console.log(`Cycle took ${endTime - startTime}ms`);
