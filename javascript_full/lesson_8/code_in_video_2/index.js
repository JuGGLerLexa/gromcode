/* eslint-disable no-restricted-syntax */
/* eslint-disable no-const-assign */
// concatProps

// const arr = ['a', 'b'];

// for (let i = 0; i < arr.length; i += 1) {
//   console.log(arr[i]);
// }

// const user = {
//   name: 'Tom',
//   key: 17,
// };

// for (let key in user) {
//   console.log(user[key]);
// }

const user = {
  name: 'Tom',
  key: 17,
};

const concatProps = obj => {
  const arr = [];

  // eslint-disable-next-line guard-for-in
  for (const key in obj) {
    // arr.push(obj[key]);
    arr = arr.concat(obj[key]);
  }

  return arr;
};

console.log(concatProps(user));
