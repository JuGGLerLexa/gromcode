// const user = {
//   name: 'Lexa',
//   age: 21,
// };

// user.sayHi = function () {
//   console.log(`Hi, I am ${this.name}`);
// };

// user.sayHi();

// const user = {
//   firstname: 'Lexa',
//   lastName: 'ABC',
//   getFullName() {
//     console.log(`${this.firstname} ${this.lastName}`);
//   },
// };

// // user.getFullName();

// // const func = user.getFullName; // undef undef, потеря контекста

// const func = user.getFullName.bind();

// func();

// // .bind();

// const user = {
//   name: 'Doe',
//   getFullName() {
//     console.log(this.name);
//   },
// };

// const func = user.getFullName.bind({ name: 'Tom' });

// func();

// const user = {
//   name: 'Doe',
//   getFullName() {
//     console.log(this.name);
//   },
// };

// const func = user.getFullName.bind({ name: 'Tom' });

// func.call({ name: 'Tom' });

// const user = {
//   name: 'Doe',
//   sayHi(age, message) {
//     console.log(`${message}. I'm ${this.name}. ${age} years old`);
//   },
// };

// const func = user.sayHi();

// func.apply({ name: 'Tom' } [17, 'Hello'])

// func(17, 'Hello');

// func.apply({ name: 'Tom' });

const user = {
  name: 'Doe',
  sayHi(age, message) {
    console.log(`${message}. I'm ${this.name}. ${age} years old`);
  },
};

const func = user.sayHi;

const anotherUser = {
  name: 'Tom',
};

// func.apply(anotherUser, [17, 'Hello']);
func.call(anotherUser, 17, 'Hello');
