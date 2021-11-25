const sum = arr => arr.reduce((acc, value) => acc + value);
const num = [1, 2, 3, 4];
// test
const num = [1, 2, 3, 4];
console.log(sum.reduce(num));

const inputSum = [2, 5, 6, 3, 0, 3, -1];
console.log(sum(inputSum));
