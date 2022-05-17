/* eslint-disable prefer-object-spread */
const users = {
  'John Doe': 17,
  Lexa: 21,
};

const copyObj = obj => Object.assign({}, obj);

console.log(copyObj(users));
