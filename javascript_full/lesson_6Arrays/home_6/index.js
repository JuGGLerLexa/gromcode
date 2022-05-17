/* eslint-disable no-unreachable-loop */
// put your code here
// input: arr
// outinput: newArr

const cloneArr = arr => {
  const clone = [];
  if (!Array.isArray(arr)) return null;
  // eslint-disable-next-line no-restricted-syntax
  for (const i of arr) clone.push(i);
  return clone;
};

const clone = [1, 2, 3, 4, 5]; // за межами функції виклк може бути локальним, а не глобальним
console.log(cloneArr(clone));
