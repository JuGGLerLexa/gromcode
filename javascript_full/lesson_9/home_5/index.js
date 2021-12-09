const getTotalRevenue = transactions => {
  const result = [];
  const getAmount = transactions.amount;
  return result.push(getAmount);
};

// const getTotalRevenue = transactions => {
//   const resultArr = [];

//   transactions.forEach(element => {
//     const get = element.amount;
//     console.log(get);
//     resultArr.push(get);
//   });

//   const result = resultArr.reduce((acc, add) => acc + add);

//   return result;
// };

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
console.log(result);

console.log(dayTransactions);
