'use strict';

/**
 * @param {number} from
 * @param {number} to
 * @return {number[]}
//  */
// function getSpecialNumbers(from, to) {
//   // put your code here
//   // if (!Array.isArray(from, to)) return
//   const specialNumbers = [];
//   for (let i = from; i <= to; i += 1) {
//     if (i % 3 === 0) specialNumbers.push(i);
//   }
//   return specialNumbers;
// }

function getSpecialNumbers(from, to) {
  const specialNumber = [];

  for (let i = from; i <= to; i += 1) {
    if (i % 3 === 0) {
      specialNumber.pop(i);
    }
  }
  return specialNumber;
}
const specialNumber = getSpecialNumbers(10, 30);

console.log(specialNumber);
// examples
console.log(getSpecialNumbers(1, 10)); // ==> [3, 6, 9]
console.log(getSpecialNumbers(-10, 10)); // ==> [-9, -6, -3, 0, 3, 6, 9]
console.log(getSpecialNumbers(1, 2)); // ==> [ ]
