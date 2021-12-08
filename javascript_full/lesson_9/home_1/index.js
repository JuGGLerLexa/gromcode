function getKeys(obj) {
  Object.keys(obj).filter(callback => console.log(callback));
}

const people = { 'John Doe': 19, Tom: 17, Bob: 18, Lexa: 21 };
getKeys(people);
