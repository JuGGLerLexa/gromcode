const getfiniteNumbers = arr => arr.filter(el => Number.isFinite(el));
const random = [1, 2, 3.4, '123', 'abc', NaN, undefined, 56];
console.log(getfiniteNumbers(random));

const getfiniteNumbersV2 = arr => arr.filter(el => isFinite);

// getNaN

// getNaNV2

// getIntegers
