/* eslint-disable prefer-rest-params */
function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

const user = {
  name: 'Tom',
  sayHi() {
    console.log(`Hi, I am ${this.name}
      `);
  },
};
const defferedHi = defer(user.sayHi, 1000);
defferedHi.call({ name: 'Bob' });
