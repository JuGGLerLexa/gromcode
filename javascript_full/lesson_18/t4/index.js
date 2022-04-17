export function saveFuncCalls(func) {
  function withMemory(...args) {
    withMemory.calls.push(args);
    return func.apply(this, args);
  }
  withMemory.calls = [];
  return withMemory;
}

function test(a, b) {
  return Math.sqrt(a * a + b * b);
}

const sumWithMemory = saveFuncCalls(test);
sumWithMemory(4, 2);
sumWithMemory(9, 1);
console.log(sumWithMemory.calls);

const user = {
  name: 'John',
  sayHi() {
    return this.name;
  },
};

const methodWithMemory = saveFuncCalls(user.sayHi);

console.log(methodWithMemory.apply({ name: 'Tom' })); // 'Tom'

console.log(methodWithMemory.calls);

// example 1
function sum(firstNum, secondNum) {
  return firstNum + secondNum;
}

console.log(saveFuncCalls(sum(1, 4)));
