/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

// input: obj, str, any
// output: obj

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function addPropertyV4(obj, key, value) {
  return Object.assign({ ...obj, [key]: value });
}

// examples
const transaction = {
  value: 170,
};

addPropertyV1(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }

console.log(addPropertyV4(transaction, 'abc', 22));

// rest !!!!!!

function sum(number, ...args) {
  console.log(args);
}

sum(1, 2, 3, 54);
