export const calc = initValue => {
  let result = initValue;

  const calculator = {
    add(number) {
      result += number;
      return this;
    },
    mult(number) {
      result *= number;
      return this;
    },
    subtract(number) {
      result -= number;
      return this;
    },
    div(number) {
      result /= number;
      return this;
    },
    result() {
      return result;
    },
  };

  return calculator;
};

// test data
const result = calc(3).add(2).mult(4).div(10).substract(5).result();
console.log(result);

const res = calc(10).add(5).mult(3).div(9).substract(2).result();
console.log(res);
