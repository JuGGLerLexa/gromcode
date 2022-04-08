const user = {
  name: 'Lexa',
  age: 21,
};

user.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

user.sayHi();
