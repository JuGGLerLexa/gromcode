// const wallet = {
//   transactions: [1, 5, 89, 337, 3],
//   getMax() {
//     return Math.max.apply(null, this.transactions);
//   },
//   getMin() {
//     return Math.min.apply(null, this.transactions);
//   },
// };

export const wallet = {
  transactions: [1, 5, 89, 337, 3],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
};

console.log(wallet.getMax());
console.log(wallet.getMin());
