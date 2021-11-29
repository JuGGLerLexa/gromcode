/* eslint-disable no-param-reassign */

// inp: obj, str, value (any type)
// out: obj
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

function addPropertyV2(obj, key, value) {
  // input: target objm source obj .. source objN
  // out: target obj
  Object.assign();
}

// test data
const transaction = {
  value: 170,
};
// console.log(addPropertyV1(transaction, 'currency', 'USD'));

// console.log(transaction);
