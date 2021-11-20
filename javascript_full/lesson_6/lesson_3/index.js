'use strict';

/**
 * @param {number} from
 * @param {number} to
 * @return {number[]}
 */
function getSpecialNumbers(from, to) {
  // put your code here
  // if (!Array.isArray(from, to)) return
  let newA = [];
  for (let i = from; i <= to; i += 1) {
    if (i % 3 === 0) newA.push(i);
  }
  return newA;
}
// examples
console.log(getSpecialNumbers(1, 10)); // ==> [3, 6, 9]
console.log(getSpecialNumbers(-10, 10)); // ==> [-9, -6, -3, 0, 3, 6, 9]
console.log(getSpecialNumbers(1, 2)); // ==> [ ]
