const getRandomNumbers = (length, from, to) => {
  if (Math.floor(from) >= Math.floor(to)) return null;
  const randomNumbers = Array(length)
    .fill()
    .map(length => Math.floor(Math.random() * (from - to + 1) + to));
  return randomNumbers;
};

// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
