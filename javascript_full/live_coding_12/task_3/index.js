// input: obj1, obj2
// out: bool
// json stringify cheat ^_^

// algo
// 1. compare length, if not equal -> false
// 2. iterate obj1 keys
// 3. compare value1 != value2 -> false

function compareObjects(obj1, obj2) {
  // put your code here
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

compareObjects(obj1, obj2); // ==> false
compareObjects(obj2, obj3); // ==> false
compareObjects(obj1, obj4); // ==> true
