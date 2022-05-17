// getAdults

// const user = {
//   name: 'Tom',
//   age: 17,
// };

// Object.keys();
// Object.values();
// Object.entries();

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// const user = {
//   Tom: 17,
//   'John Doe': 19,
//   Bob: 18,
// };

// const getAdults = usersObj => {
//   // { 'Tom': 17, 'John Doe': 19, } => [ ['Tom', 17], ['John Doe', 19] ]
//   const usersArray = Object.entries(usersObj);

//   // [ ['Tom', 17], ['John Doe', 19] ] => [ ['John Doe', 19] ]
//   const filteredUsersArray = usersArray.filter(user => user[1] >= 18);

//   // [ ['John Doe', 19] ] => ['John Doe']
//   const usersNames = filteredUsersArray.map(user => user[0]);

//   return usersNames;
// };

// console.log(getAdults(user)); /* 'John Doe', 'Bob' */

// refactoring

// const getAdults = usersObj =>
//   Object.entries(usersObj)
//     .filter(user => user[1] >= 18)
//     .map(user => user[0]);

// console.log(getAdults(user)); /* 'John Doe', 'Bob' */

const user = {
  name: 'Tom',
  key: 17,
};

const concatProps = obj => Object.values(obj);

console.log(concatProps(user));
