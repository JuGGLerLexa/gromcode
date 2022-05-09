/**
 * @param {number} firstNum
 * @param {number} secondNum
 * @return {number}
 */
function sum(firstNum, secondNum) {
  // put your code here
  const sum = firstNum + secondNum;
  return sum;
}

// examples
sum(11, 11); // ==> 22
sum(-2, 10); // ==> 8

// 2

// put your code here
const hola = 'Hi, ';
function sayHi(name) {
  const say = hola + name;
  console.log(say);
}

sayHi('Lexa');

// 3
// put your code here
function getEvenOdd(num) {
  if (num % 2 === 0) {
    return 'even';
  }
  return 'odd';
}
