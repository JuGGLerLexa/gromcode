const getTotalPrice = arr => {
  const sum = arr.reduce((acc, el) => acc + el);
  return '$' + Math.floor(sum * 100) / 100;
};

const numberList = [17.159];

console.log(getTotalPrice(numberList));
