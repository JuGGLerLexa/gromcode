/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
const rooms = {
  room1: [{ name: 'Ann' }, { name: 'Alex' }, { name: 'Katya' }, { name: 'Lilya' }],
  room2: [{ name: 'Ruslan' }, { name: 'Kolya' }, { name: 'Vanya' }, { name: 'Lexa' }],
  room3: [{ name: 'Vinya' }, { name: 'Bodya' }, { name: 'Roma' }, { name: 'Vira' }],
};

const getPeople = object =>
  Object.values(object)
    .flat()
    .map(elem => (elem = elem.name));

const usersA = getPeople(rooms);
console.log(usersA);
