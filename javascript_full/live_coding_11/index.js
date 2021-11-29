/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

// inp: obj, str, value (any type)
// out: obj

// input: target objm source obj .. source objN
// out: target obj
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

function addPropertyV2(obj, key, value) {
  // const sourceObj = { [key]: value };
  // Object.assign(obj, sourceObj });
  return Object.assign(obj, { [key]: value });
}

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function addPropertyWrong(obj, key, value) {
  const objNew = Object.assign({ [key]: value }, obj);
  return objNew;
}

function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

// test data
const transaction = {
  value: 170,
  city: 'Kiev',
};
console.log(addPropertyV4(transaction, 'currency', 'USD'));
console.log(transaction);

// spread ' ... ' - is cooL!!!
