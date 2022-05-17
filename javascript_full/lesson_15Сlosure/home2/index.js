export const createCalculator = () => {
  let memory = 0;

  const add = number => {
    memory += number;
  };

  const decrease = number => {
    memory -= number;
  };

  const reset = () => {
    memory = 0;
  };

  const getMemo = () => memory;

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

const calculator = createCalculator();
const calculatorNext = createCalculator();
