/* eslint-disable prefer-rest-params */
// defer(func, ms) => Function

// function defer(func, ms) {
//   return function () {
//     setTimeout(func, ms);
//   };
// }

// const sayHi = () => {
//   console.log('Hi');
// };

// sayHi();

// const deferredSayHi = defer(sayHi, 1000);

// deferredSayHi();

function defer(func, ms) {
  return function () {
    setTimeout(() => func.aply(this, arguments), ms);
  };
}

// const sum = (a, b) => {
//   console.log(a + b);
// };

const user = {
  name: 'Tom',
  sayHi() {
    console.log(`Hi, I'am ${this.name}!`);
  },
};

const deferredHi = defer(user.sayHi, 1000);

deferredHi.call({ name: 'Bob' });
