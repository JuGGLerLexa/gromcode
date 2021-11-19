// const sum = (from, to) => {
//   let res = 0;
//   for (let i = from; i <= to; i += 1) res += i;
//   return res;
//   const compareSums = (a, b, c, d) => {
//     if (sum(a, b) > (c, d)) return true;
//     return false;
//   };
// };

const sum = (from, to) => {
  let res = 0;
  for (let i = from; i <= to; i += 1) res += i;
  return res;
};
const compareSums = (a, b, c, d) => {
  if (sum(a, b) > (c, d)) return true;
  return false;
};

// test
console.log(sum(20, 21));
console.log(sum(20, 32));
console.log(sum(30, 21));

console.log(compareSums(20, 21, 2, 3));
console.log(compareSums(20, 21));
console.log(compareSums(0, 0, 21, 1));
