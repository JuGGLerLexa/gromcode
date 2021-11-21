'use strict';

// cheack list
//
// якщо не масив = null
// якщо масив = *
//
//
/**
 * @param {number[]} arr
 * @return {number[]}
 */
function squareArray(arr) {
  // put your code here
  const squareNum = [];
  if (!Array.isArray(arr)) return null;
  for (let i = 0; i < arr.length; i += 1) {
    squareNum.push(arr[i] * arr[i]);
  }
  return squareNum;
}

// examples
console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
console.log(squareArray([10, 0, -4])); // ==> [100, 0, 16]
console.log(squareArray([1])); // ==> [1]
console.log(squareArray(12)); // ==> null
