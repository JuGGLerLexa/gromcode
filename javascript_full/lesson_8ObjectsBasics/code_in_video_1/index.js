// const prop = 'my';

// const obj = {
//   age: 17,
//   interest: 'football',
//   name: 'Lexa',
//   'my name': 'Bob',
//   [prop + 'name']: 'value',
// };
// console.log(obj.age); // 17;

// // obj.age = 18;

// console.log(obj.age); // 18

// console.log(obj['my name']);
// console.log(obj[prop + 'name']);

// transformToObject

const transformToObject = arr => {
  const obj = {};

  arr.forEach(el => {
    obj[el] = el;
  });

  return obj;
};

// [1, 'text] => { }

const arr = [1, 'text'];
const result = transformToObject(arr);
// console.log(transformToObject);

console.log(result);

const a = {};
const b = {};

console.log(a === b); // false

const c = {};
const d = c;
console.log(c === d); // true

const name = 'Tom';

const user = {
  // name: name,
  name,
};
