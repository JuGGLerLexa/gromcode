'use strict';

/**
 * @param {number[]} arr
 * @return {number[]}
 *
 */ function getArrayBounds(arr) {
  if (Array.isArray(arr)) {
    return [arr.length, arr.shift(), arr.pop()];
  }
  return null;
}

// examples
getArrayBounds([1, 10, 9, 11]); // ==> [4, 1, 11]
getArrayBounds(10, 12, 14); // ==> null
getArrayBounds([1]); // ==> [1, 1, 1]
