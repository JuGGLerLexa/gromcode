const withdraw = (clients, balances, client, amount) => {
  let i = 0;
  while (i < clients.length - 1) {
    if (clients[i] === client) break;
    i += 1;
  }
  if (balances[i] < amount) return -1;
  const cheak = balances[i] - amount;
  return cheak;
};

const testClients = ['lexa', 'anya', 'katya'];
const testBalaces = [1000, 0, 123];

console.log(withdraw(testBalaces, testClients));
console.log(testBalaces);
