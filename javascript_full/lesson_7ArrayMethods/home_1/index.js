// put your code here
// input: arr
// out: (double)Arr (if not => null)

// It's not work! It's just test
const squareArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map(double => double * double);
};

// test data
const test = [1, 0, 21, 101, 0.4, 5, true];
const test1 = (1, 0, 21, 101, 0.4, 5, true);
console.log(squareArray(test));
console.log(squareArray(test1));
