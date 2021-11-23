const numbersList = [5, 15, 8, 10, -4, 50, 220];

// input: func, this (optional)
// outinput: arr

// callback
// input:el, index (optional), array (optional)
// outinput: ell

// BAD
// const mapRes1 = numbersList.map(el => {
//   const res = el * el;
//   return res;
// });
// console.log(mapRes1);

// const mapRes = numbersList.map(el => el * el);
// console.log(mapRes);

// // callback
// // input: el, index (optional), array (optional)
// // out: undef

// numbersList.forEach(el => {
//   if (el > 100) {
//     console.log(el);
//   }
//   return el;
// });

// find  ======
// input: func, this (optional)
// out: el

// callback =====
// input: func, this (optional)
// out: bool
// BAD
// const findRes = numbersList.find(el => {
//   if (el % 2 === 0) {
//     return true;
//   }
//   return false;
// });

// GOOD
// console.log(numbersList.find(el => el % 2 === 0));

// wrong method

// console.log(numbersList.filter(el => el % 2 === 0)[0]);

// reduce ====
const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 554, 41];

// input: func, this (optional)
// out num

// callback
// input: acc (num), el (num)
// out acc (num)
// const sumRes = transactions.reduce((acc, el) => {
//   console.log('acc: ' + acc);
//   console.log('el: ' + el);
//   // acc += el;

//   return acc += el;
// });

const sumRes = transactions.reduce((acc, el) => acc + el);

console.log(sumRes);
