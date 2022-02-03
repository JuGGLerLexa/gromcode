const getRandomNumbers = (length, from, to) => {
  // put your code here
  if (to - from < 1) {
    return null;
  }
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    const num = Math.random() * (to - from) + from;
    arr.push(Math.floor(num));
  }
  return arr;
};

// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 5.4, 7.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 4.4, 5.22)); // ==> [3, 3, 2, 3, 2]
