// input: arr, arr
// output: obj

// algo
// 1. creat empty object
// 2. iterate arrays & put key/value to the obj

// BAD (for)
// function buildObject(keysList, valuesList) {
//   const res = {};
//   for (let index = 0; index < keysList.length; index += 1) {
//     res[keysList[index]] = valuesList[index];
//   }

//   return res;
// }

// GOOD
function buildObject(keysList, valuesList) {
  return keysList.reduce((acc, key, index) => ({ ...acc, [key]: valuesList[index] }), {});
}
// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(buildObject(keys, values));
