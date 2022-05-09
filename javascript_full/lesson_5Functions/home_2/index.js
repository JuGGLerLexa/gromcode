// function increaser(a, index) {
//   for (let i = a; i > index; i += 1) {
//   return a += index;
//   }
// };

// function increaser(a, index) {
//   for (let i = a; i > index; i += 1) {
//     if (a && index % 2 === 0) {
//       return (a += index);
//     }
//   }
// }

const increaser = (a, index) => {
  if (a > index) a += index;
  return a;
};

// test
console.log(increaser(23, 212)); // ! i < index
console.log(increaser(5, 1));
console.log(increaser(50, 50)); // ! >=
console.log(increaser(2, 0)); // ! i > index
console.log(increaser(2, 0.1)); // ! не ціле число. Умова не правильна(
