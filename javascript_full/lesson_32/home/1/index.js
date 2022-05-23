const getValue = numb => {
  const number = new Promise(resolve => {
    resolve(numb);
  });
  return number;
};

const asyncNumb1 = getValue(2);
const asyncNumb2 = getValue(20);
const asyncNumb3 = getValue(20);
const getSum = numbers =>
  numbers.filter(value => !isNaN(value)).reduce((acc, num) => acc + Number(num), 0);

export const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers)
    .then(numbers => getSum(numbers))
    .catch(() => Promise.reject(new Error("Can't calculate")));
};
asyncSum(asyncNumb1, asyncNumb2, asyncNumb3).then(result => console.log(result));
