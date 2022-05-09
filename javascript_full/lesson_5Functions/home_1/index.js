// 1. Learn requirement +++
// 2. Create step by step algo (& input/output for funtions) +++
// 3. Write draft solution & testing +++
// 4. Refactoring & final testing -> final solution +++

// const { get } = require("core-js/core/dict")

// ціле число
// function getSum(firstNum, secondNum) {
//   let i = firstNum;
//   while (i <= secondNum) {

//   }
//   console.log(getSum)
// }

// Боже.. як я все люблю ускладнювати..
// function getSum(firstNum, secondNum) {
//   return firstNum + secondNum;
// }

// console.log(getSum(12.21, 21));
// console.log(getSum(1421, 213));
// console.log(getSum(12345, 154321));

// put your code here
// function getSum(firstNum, secondNum) {
//   if (firstNum && secondNum === 0) {
//     return firstNum + secondNum;
//   }
// }

// function getSum(firstNum, secondNum) {
//   if (firstNum && secondNum % 2 === 0) {
//     return firstNum + secondNum;
//   }
//   return undefined;
// }

// function (firstNum, secondNum) {
//   if (firstNum && secondNum % 2 === 0) {
//     return firstNum + secondNum;
//   } else if (firstNum || secondNum % 2 !== 0) {
//    return undefined;
//   }
// }

function getSum(firstNum, secondNum) {
  let result = 0;
  for (let i = firstNum; i <= secondNum; i += 1) {
    if (i % 2 === 0) {
      result += i;
    }
  }
  return result;
}
// // test
// console.log(getSum(14, 10));
// console.log(getSum(3, 1));
// console.log(getSum(13, 10)); // !!!!
// console.log(getSum(0, 0));

// const test = 12;
// console.log(test % 2 !== 0);

// const test1 = 13;
// console.log(test1 % 2 !== 0);
// не уважно виконав перший пункт! не правильно зрозумів задачу
