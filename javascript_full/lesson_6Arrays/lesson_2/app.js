'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
function getSum(arr) {
  // put your code here
  let sum = 0;
  // if (arr === []) {
    if (Array.isArray(arr)) {
    for (const num of arr) sum += num;
    return sum;
  }
  return null;
}

// examples
console.log(getSum([1, 10, -10, 4])); // ==> 5
console.log(getSum([1])); // ==> 1
console.log(getSum([-8, 8])); // ==> 0
console.log(getSum(10, 12, 14)); // ==> null
