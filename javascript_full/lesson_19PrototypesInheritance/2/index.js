/* eslint-disable */
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(value) {
//     const [firstName, lastName] = value.split(' ');
//     this.firstName = firstName;
//     this.lastName = lastName;
//   },
// };
// user.firstName = 'Tom';
// console.log(user.fullName);
// user.fullName = 'Lexa Kudry';
// console.log(user.fullName);

function getOwnProps(obj) {
  const prop = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      prop.push(key);
    }
  }
  return prop.filter(el => typeof obj[el] !== 'function');
}

const vehicle = {
  name: `Argo`,
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
};

Object.setPrototypeOf(ship, vehicle);
