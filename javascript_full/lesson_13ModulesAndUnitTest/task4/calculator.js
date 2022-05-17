/* eslint-disable default-case */

export const calc = expression => {
  if (typeof expression !== 'string') return null;

  const [a, operation, b] = expression.split(' ');
  let result;

  switch (operation) {
    case '+':
      result = +a + +b;
      break;
    case '-':
      result = +a - +b;
      break;
    case '*':
      result = +a * +b;
      break;
    case '/':
      result = +a / +b;
      break;
  }

  return `${expression} = ${result}`;
};

console.log(calc('5 + 2'));
console.log(calc('5 * 2'));
console.log(calc('49 / 7'));
console.log(calc('5' + []));
console.log(calc(7 + 7));
