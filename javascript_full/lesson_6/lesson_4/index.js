'use strict';

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swap(numbers) {
  // put your code here
  const [a, ...rest] = numbers;
  return [...rest, a];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  // put your code here
  let numbersArr = [];
  for (const sum of numbers) {
    if (sum !== numbers[0]) numbersArr.push(sum);
  }
  numbersArr.push(numbers[0]);
  return numbersArr;
}

// ну такий собі кастиль... 

// examples
console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
