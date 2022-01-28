const getParsedIntegers = arr => arr.map(el => Number.parseInt(el, 10));

const getParsedIntegersV2 = arr => arr.map(integer => parseInt(integer, 10));

const getParsedFloats = fraction => fraction.map(num => Number.parseFloat(num));

const getParsedFloatsV2 = arr => arr.map(el => parseFloat(el));

const isEqual = [0.1, 4.3, 7.5, 15.7, 149, '123', ' 456.12.123sad ', NaN, null, undefined];
console.log(getParsedIntegers(isEqual));
console.log(getParsedFloats(isEqual));

// to equalize

const result = getParsedIntegers === getParsedIntegersV2;
const resultV2 = getParsedFloats === getParsedFloatsV2;

console.log(resultV2);
