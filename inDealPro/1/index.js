/* eslint-disable */

// #1
var a = 1;
if (a) {
  function foo() {};
  a += 'function', foo; // in my answear: 'function',
}

console.log(a);
