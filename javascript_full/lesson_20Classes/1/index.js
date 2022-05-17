class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static compare(user1, user2) {
    return user1.age - user2.age;
  }

  sayHi() {
    console.log(`Hi, am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New {phoro request was sent for ${this.age}}`);
  }

  setAge(value) {
    if (value < 0) {
      return false;
    }
    this.age = value;
    if (value >= 25) {
      this.requestNewPhoto();
    }
    return value;
  }
}

const user1 = new User('Tom', 17);
const user2 = new User('Tom', 34);

console.log(user1);
console.log(User.compare(user1, user2));

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.sayHi = function () {
//   console.log(`Hi, am ${this.name}`);
// };

// User.prototype.requestNewPhoto = function () {
//   console.log(`New {phoro request was sent for ${this.age}}`);
// };

// User.prototype.setAge = function (value) {
//   if (value < 0) {
//     return false;
//   }
//   this.age = value;
//   if (value >= 25) {
//     this.requestNewPhoto();
//   }
//   return value;
// };
