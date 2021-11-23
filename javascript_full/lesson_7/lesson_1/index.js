// put your code here

const getSpesialNumbers = numbers => numbers.filter(num => num % 3 === 0);

// function getSpecialNumbers(arr) {
//   return arr.filter(num => num % 3 === 0);
// }

// const getSpesialNumbers = numbers => {
//   const spesialNumbers = [];

//   numbers.forEach(num => {
//     if (num % 3 === 0) {
//       spesialNumbers.push(num);
//     });

//   return spesialNumbers;
// };

const arr = [1, 2, 3, 4, 5, 6, 9, 15];

console.log(getSpesialNumbers(arr));
