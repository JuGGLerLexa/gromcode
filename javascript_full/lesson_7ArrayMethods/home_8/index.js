const arrAverage = arr => {
  if (!Array.isArray) return null;
  return arr.reduce((acc, num) => acc + num) / arr.length;
};

// test data

const test = [2, 5, 6, 3];
console.log(arrAverage(test));
