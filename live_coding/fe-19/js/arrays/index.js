console.log('Hello, FE-19!');

// 1

function getSenseOfLife() {
  return 42;
}

// option
const res = getSenseOfLife();
console.log(res);

// option 2
console.log(getSenseOfLife(55));

// 2

function getSquared(num) {
  if (num < 0) {
    return num * num;
  }
  return num;
}

// console.log(getSquared(4, 6));
// console.log(getSquared(-8));

// function getSquared(num) {
//   if (num < 0) {
//     return num * num;
//   }
// }

console.log(getSquared(4, 6));
console.log(getSquared(-8));

// 3

function sum(firstNum, secondNum) {
  console.log(firstNum);
  console.log(secondNum);
  return firstNum + secondNum;
}

// test data
console.log(sum(77));
console.log(sum());

const first = 8;
const second = 10;
console.log(sum(first, second));
console.log(sum(1, 2, 3));

// 4

function print(num1) {
  return 'I am 34 years old';
}

console.log(print);

// 5
// function print(age) {
//   console.log(`I am ${age} years old`);
// }
// print(34);

// function sendEmail(userID) {
//   const email = getEmailByID(userId);
//   //send email
// }

// test 6

// option 1
// const mult = (firstNum, secondNum) => {
//   return firstNum * secondNum;
// };

// option 2
const mult = (firstNum, secondNum) => firstNum * secondNum;

// test data
console.log(mult(20, 14));

const getSquaredArrow = num3 => num3 * num3;

const getMagicNumber = () => 17;

// console.log((() => 17)() === (() => 17)()));
