// algo
// 1. iterate keyList array
// 2. add key-value to the obj

// V1
// function buildObject(keysList, valuesList) {
//   const resObj = {};

//   for (let index = 0; index < keysList.length; index += 1) {
//     resObj[keysList[index]] = valuesList[index];
//   }

//   return resObj;
// }

// V2
// function buildObject(keysList, valuesList) {
//   return keysList.reduce((acc, key, index) => {
//     acc[key] = valuesList[index];
//     return acc;
//   }, {});
// }

// V3
// function buildObject(keysList, valuesList) {
//   return keysList.reduce((acc, key, index) => {
//     return { ...acc, [key]: valuesList[index] };
//   }, {});
// }

// V4
const buildObject = (keysList, valuesList) =>
  keysList.reduce((acc, key, index) => ({ ...acc, [key]: valuesList[index] }), {});

// examples
// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];
// console.log(buildObject(keys, values)); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }

const list = ['first', 'second', 'third'];
const li = [1, null, undefined];

console.log(buildObject(list, li));

// if code doesn't work = split by steps
// test
const keys = ['hour', 'min', 'sec'];
const values = ['10', '13', '30'];
const result = buildObject(keys, values);
console.log(result);
