/* eslint-disable consistent-return */
// input: arr, num
// outinput: arr

const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  // eslint-disable-next-line array-callback-return
  return arr.map(newArr => {
    if (newArr % 2 === 0) {
      return (newArr += delta);
    }
    return newArr;
  });
};

// test data

const num = [20, 10, 30, 60, 75];
const testnum = 10;
console.log(increaseEvenEl(num, testnum));