/* eslint-disable no-use-before-define */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

// reduce - зібрати всі данні і вернути одне ціле.

// input: callback
// acc (number)

// callback
// acc, el, index, array (optional)
// eslint-disable-next-line prettier/prettier
const result = transactions.reduce((acc, element) => acc += element);
console.log(result);

// 2

// input: arr, callback
// out: arr

// callback
// el
// bool

// algo
// 1. iterete arr
// 2. aplly calback to el
// 3. if true - push to res arr
const filterArrayElements = (arr, callback) => {
  const result = [];

  for (let index = 0; index < arr.length; index += 1) {
    if (callback(arr[index])) {
      result.push(arr[index]);
    }
  }
  return result;
};

// test data
const arr = [123, 23, 3];
const callback = index => index;

console.log(filterArrayElements(arr, callback));
//
// const arr = ['Lex', 'Andrey', 'Vlad', 'Yaroslav'];
// const callback = el => el.includes('a');

// console.log(filterArrayElements(arr, callback));

//

const test = num => {
  return num < 3;
};

const res = filterArrayElements([1, 2, 3, 4], test);
console.log(res);
//

function sum(a, b) {
  console.log(...arguments);
}

console.log(sum(5, 9, 4, 32));

//

const array1 = [5, 8, 130, 12, 44];
const found = el => el.find(array1);

console.log(filterArrayElements());
