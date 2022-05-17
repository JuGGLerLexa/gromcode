// input: num;
// outinput: sumNum

const getTotalRevenue = transactions =>
  Object.values(transactions)
    .flatMap(amount => amount.amount)
    .reduce((acc, num) => acc + num, 0);

// refactoring

// const getTotalRevenue = transactions => {
//   const getRevenu = Object.values(transactions);
//   console.log(getRevenu);

//   const values = getRevenu.flatMap(amount => amount.amount);
//   console.log(values);
//   const sum = values.reduce((acc, num) => acc + num, 0);
//   console.log(sum);
// };

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
console.log(result);
