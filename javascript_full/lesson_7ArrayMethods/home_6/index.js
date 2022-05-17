const sum = arr => arr.reduce((acc, value) => acc + value);

// test

const num = [1, 2, 3, 4];
console.log(sum(num));
const inputSum = [2, 5, 6, 3, 0, 3, -1];
console.log(sum(inputSum));
