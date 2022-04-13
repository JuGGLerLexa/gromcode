// const wallet = {
//   transactions: [1, 5, 89, 337, 3],
//   getMax() {
//     return Math.max.apply(null, this.transactions);
//   },
//   getMin() {
//     return Math.min.apply(null, this.transactions);
//   },
// };

const wallet = {
  transactions: [1, 5, 89, 337, 3],
  getMax() {
    return Math.max.apply(...this.transactions);
  },
  getMin() {
    return Math.min.apply(...this.transactions);
  },
};
