/* eslint-disable default-case */
// '1 + 2" => '1 + 2 = 3'

const calc = expression => {
  const [a, operator, b] = expression.split(' ');
  let result;

  switch (operator) {
    case '+':
      result = Number(a) + +b;
      break;
    case '-':
      result = a - b;
      break;
  }

  return `${expression}  = ${result}`;
};

console.log(calc('1 + 2'));
console.log(calc('3 - 5'));
