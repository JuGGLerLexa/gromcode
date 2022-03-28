/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */

// task 1

export const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.reverse();
};

// test data

const test = [1, 2, 3, 4, 5];
console.log(reverseArray(test));

const test1 = (1, 2, 3, 4, 5);
console.log(reverseArray(test1));

const test2 = '2, 3';
console.log(reverseArray(test2));

// task 2

export const withdraw = (clients, balances, client, amount) => {
  const clientId = clients.indexOf(client);
  if (balances[clientId] >= amount) {
    // eslint-disable-next-line no-return-assign
    return (balances[clientId] -= amount);
  }
  return -1;
};

// example 1:

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

// example 2:

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));

// example 3:

console.log(withdraw(['Lexa', 'Igor', 'anonymous'], [2000, 100, 5000], 'anonymous', 4500));

// task 3
export const getAdults = obj => {
  const aduolt = {};
  for (const key in obj) {
    if (obj[key] >= 18) {
      aduolt[key] = obj[key];
    }
  }
  return aduolt;
};

// examples
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }
console.log(getAdults({ Lexa: 22, Lera: 16 }));
