export const createCalculator = () => {
  let remember = 0;

  function add(number) {
    remember += number;
  }

  function decrease(number) {
    remember -= number;
  }

  function reset() {
    remember = 0;
  }

  function getMemo() {
    return remember;
  }
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

console.log(createCalculator.add(10));
// console.log(decrease(2));
// console.log(reset(35));
// console.log(getMemo(41));
