/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая 
практика,
 * лучше использовать методы класса Object - keys(), values(), entries().
 Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен 
 аннотацией eslint-disable
 * */

// input: obj
// outinput:

const pickProps = (obj, props) => {
  // put your code here
  const spaceObj = {};
  for (const key in obj) {
    if (props.includes(key)) {
      spaceObj[key] = obj[key];
    }
  }
  return spaceObj;
};

// examples
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // ==> { a: 1, c: 3 }
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }
