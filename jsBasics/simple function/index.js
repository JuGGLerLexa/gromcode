// // eslint-disable-next-line consistent-return
// function min(firstNumber, secondNumber) {
//   if (firstNumber > secondNumber) {
//     return secondNumber;
//   }
//   if (firstNumber < secondNumber) {
//     return firstNumber;
//   }
// }

function min(firstNumber, secondNumber) {
  if (firstNumber < secondNumber) return firstNumber;
  return secondNumber;
}

console.log(min(100, 40));
console.log(min(30, 50));

const literA = 25;
const leterB = 30;
console.log(min(literA, leterB));

console.log(min(100.4, 30.5));
console.log(min(100, 4));
console.log(min(30, 5));
