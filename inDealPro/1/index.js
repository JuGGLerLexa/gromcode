/* eslint-disable */

// #1
var a = 1;
if (a) {
  function foo() {};
  a += 'function', foo;
}

console.log(a);
