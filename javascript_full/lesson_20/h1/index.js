export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty() {
    return { name: '', age: null };
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(value) {
    if (value < 0) {
      return false;
    }

    this.age = value;
    if (value >= 25) {
      console.log(`New photo request was sent for ${this.name}`);
    }

    return this.age;
  }
}

console.log(User.sayHi); // undef, так як нічого не передано
// console.log(User);
const user1 = new User('Jonh', 28);
user1.requestNewPhoto();
console.log(user1.requestNewPhoto);
user1.sayHi();
console.log(user1);
const user2 = new User('Bob', 28);
user2.sayHi();
console.log(user2.requestNewPhoto);

// console.log(User.age);
// console.log(User.name);
// console.log(User.createEmpty);
// console.log(User.sayHi);
// console.log(User.setAge);
// console.log(User.requestNewPhoto);
