// --- filter
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

// inp: func
// out: arr

// inp: num, index (optional), arr (otional)
// out: bool
// anoterNumbersList.filter(num => num);

// option 1
// function filterCallback(num) {
//   console.log('filterCallback is called ' + num);

//   return num > 500;
// }

// const filterRes = anotherNumbersList.filter(filterCallback);
// console.log(filterRes);

// // filterCallback(10, 4, [2, , 3]);

// option 2
// const filterRes = anotherNumbersList.filter(function (num) {
//   return num > 500;
// });
// console.log(filterRes);

// filterCallback(10, 4, [2, , 3]);

const filterRes = anotherNumbersList.filter(num => num > 5);

// map
const numbersList = [5, 0, 8, 10, -4, 50, 220]; // пребразования

// inp: funt, obj (optional)
// out: arr

// input: el
// out: modified el
const mapRes = numbersList.map(el => el * el);
console.log(mapRes);

// find
// input: func
// out: el

// inp: el
// out: bool
// options 1
// const findRes = numbersList.find(el => {
//     if (el % 2 === 1) {
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log(findRes);

// option 2
const findRes = numbersList.find(el => el % 2 === 1);

console.log(findRes);

// some
// input: callback(func)
// output: boolean

// разница some / find.. find = el, some = bool

// --- forEach - просто проходимся по масиву (на практиці не використовується..)
// inp: func
// out: undef

// callback
// inp: el
// out: undef

numbersList.forEach(el => {
  if (el < 0) {
    console.log(el);
  }
});
