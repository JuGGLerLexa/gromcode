// put your code here
// input: arr
// outinput: arr
// returt null if not arr
// pop

function reverseArray(arr) {
  const mirror = [];
  if (!Array.isArray(arr)) return null;
  // eslint-disable-next-line no-restricted-syntax
  for (const i of arr) mirror.unshift(i);
  return mirror;
}

// test

const randomNum = [0, 10, 20, 25, 30, 55];
console.log(reverseArray(randomNum));
