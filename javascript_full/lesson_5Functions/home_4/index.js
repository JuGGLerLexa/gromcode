// put your code here
// const findDivConunt = (a, b, n) => {
// if (a && b % n === 0) return undefined;
// };
// console.log(findDivConunt(2, 5, 10));

// put your code here

const findDivConunt = (a, b, n) => {
  let result = 0;
  for (let i = a; i <= b; i += 1) {
    if (i % n === 0) result += 1;
  }
  return result;
};
