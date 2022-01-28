const getfiniteNumbers = arr => arr.filter(el => Number.isFinite(el));

const getfiniteNumbersV2 = arr => arr.filter(el => isFinite(el));

const getNaN = arr => arr.filter(el => Number.isNaN(el));

const getNaNV2 = arr => arr.filter(el => isNaN(el));

const getIntegers = arr => arr.filter(el => Number.isInteger(el));

const random = [1, 2, 3.4, '123 ', 'abc', NaN, undefined, 56];
const random1 = [123, 2142, '  2134', NaN, undefined, null];

console.log(getfiniteNumbers(random));
console.log(getIntegers(random1));

const isEqualTo = getfiniteNumbers === getfiniteNumbersV2;

console.log(isEqualTo);
console.log(Number.isNaN === isNaN);

const isEqual = Number.isFinite === isFinite;

console.log(isEqual);
console.log(Number.isFinite === isFinite);
