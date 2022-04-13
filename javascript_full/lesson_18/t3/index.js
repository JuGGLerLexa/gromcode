/* eslint-disable prefer-rest-params */
// pseudo arrays

// apply
// function argsSum() {
//   return [].reduce.apply(arguments, [
//     (acc, elem) => {
//       return acc + elem;
//     },
//     0,
//   ]);
// }

// console.log(argsSum(1, 2, 3, 4));

// [].reduce((acc, elem) => {}, 0);

// call

function argsSum() {
  return [].reduce.call(
    arguments,
    (acc, elem) => {
      return acc + elem;
    },
    0,
  );
}

console.log(argsSum(1, 2, 3, 4));

[].reduce((acc, elem) => {}, 0);

// 36.15 хв
