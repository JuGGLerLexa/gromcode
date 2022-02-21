/*
 * A callback is a function passed as an argument to another function
 * This technique allows a function to call another function
 * A callback function can run after another function has finished
 * */

function sum(from, to, resolver) {
  let sum = 0;
  for (let index = from; index <= to; index += 1) {
    sum += index;
  }

  resolver(sum);
}

function printResult(res) {
  console.log('Result is ' + res);
}

sum(10, 16, printResult);
