const people = [
  { name: 'Ігор', age: 22, budget: 500 },
  { name: 'Олексій', age: 21, budget: 2500 },
  { name: 'Коля', age: 27, budget: 700 },
  { name: 'Олег', age: 22, budget: 1500 },
  { name: 'Павло', age: 25, budget: 1000 },
  { name: 'Андрій', age: 20, budget: 100 },
];

// for (let i = 0; i < people.length; i += 1) {
//   console.log(people[i]);
// }

// for (const person of people) {
//   console.log(person);
// }

// ECMA 5

// people.forEach(function (person, index, peopleArr) {
//   console.log(person);
//   console.log(index);
//   console.log(person);
// });

// ECMA 6

// people.forEach(person => console.log(person));

// Map
// const newPeople = people.map(person => {
//   return person.name;
// });

// console.log(newPeople);
