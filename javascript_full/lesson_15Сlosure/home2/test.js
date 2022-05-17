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

// 2

let remember = 0;

export function addA(number) {
  remember += number;
}

export function decreaseA(number) {
  remember -= number;
}

export function resetA() {
  remember = 0;
}

export function getMemoA() {
  return remember;
}

// console.log(add(10));
// console.log(decrease(2));
// console.log(reset(35));
// console.log(getMemo(41));

const calculator = createCalculator();
const calculatorNext = createCalculator();
