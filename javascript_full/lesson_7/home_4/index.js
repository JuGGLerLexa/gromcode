const cloneArr = arr => {
  if (!Array.isArray) {
    return null;
  }
  return arr.slice();
};

const num = [1, 2, 3, 4, 5];
console.log(cloneArr(num));
console.log(num);
