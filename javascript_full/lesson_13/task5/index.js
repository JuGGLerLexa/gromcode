export const reverseArray = arr => {
  if (!Array.isArray(arr)) return null;

  return arr.reverse();
};

// test data

const test = [1, 2, 3, 4, 5];
console.log(reverseArray(test));

const test1 = (1, 2, 3, 4, 5);
console.log(reverseArray(test1));

const test2 = (2, 3);
console.log(reverseArray(test2));
