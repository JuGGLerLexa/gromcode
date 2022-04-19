/* eslint-disable no-return-assign */
// User, constructor

// function User(name, age) {
//   this.name = name;
//   this.age = age;

//   this.sayHi = function () {
//     console.log(`Hi, I am ${this.name}`);
//   };
// }

// const user1 = new User('Tom', 17);

// console.log(user1);

// user1.sayHi();

// const user2 = new User('Bob', 21);

// user2.sayHi();

// console.log(user2.sayHi === user1.sayHi);

// User.prototype.sayHi = function () {
//   console.log(`Hi, I am ${this.name}`);
// };

// const user1 = new User('Tom', 17);
// const user2 = new User('Bob', 21);

// console.log(user1);

function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (age) {
  if (age < 0) {
    return false;
  }
  if (age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }
  return (this.age = age);
};

const user = new User('John', 17);
user.setAge(81);

console.log(user);
user.sayHi();
user.requestNewPhoto();
