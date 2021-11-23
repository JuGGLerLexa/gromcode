const flatArray = arr => arr.flat().sort((a, b) => a - b);

const num = [1, [2, 3, 4], 5, [6]]; // => [1, 2, 3, 4, 5, 6]

console.log(flatArray);
