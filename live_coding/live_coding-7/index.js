// How to work on tech tasks. Step by step guide

// 1. Learn requirement +++
// 2. Create step by step algo (& input/output for funtions) +++
// 3. Write draft solution & testing +++
// 4. Refactoring & final testing -> final solution +++

// algo
// 1. iterete numbers from 2 tp num
// 2. iterete from 2 to 1
// 3.

// input = number
// output = undefained

// function getPrimes(num) {
//   for (let i = 2; i <= num; i += 1) {
//     // console.log('Checking num ' + i);
//     let isPrime = true;
//     for (let number = 2; number < i; number += 1) {
//       // console.log('inner number ' + number);
//       if (i % number === 0) {
//         // console.log('Num ' + i + ' In not prime');
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime) {
//       console.log(i);
//     }
//   }
// }

// test data
// getPrimes(15);
// getPrimes(123);

function isPrime(number) {
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(num) {
  for (let i = 2; i <= num; i += 1) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

getPrimes(12);
