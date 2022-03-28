/* eslint-disable no-param-reassign */
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

const test2 = (2, 3);
console.log(reverseArray(test2));

// task 2

export const withdraw = (clients, balances, client, amount) => {
  const clientId = clients.indexOf(client);
  if (balances[clientId] >= amount) {
    // eslint-disable-next-line no-return-assign
    return (balances[clientId] -= amount);
  }
  // console.log(balances);
  return -1;
};

// example 1:

// input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));

// output
// 37
// и массив balances должен быть [1400, 37, -6]

// example 2:

// input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));

// output
// -1
// и массив balances должен быть [1400, 87, -6]
