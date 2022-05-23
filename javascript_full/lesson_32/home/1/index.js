const getPromiseWithDelay = (value, delay) =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, delay);
  });

const prom1 = getPromiseWithDelay(15, 1000);
const prom2 = getPromiseWithDelay(41, 2000);
const prom3 = getPromiseWithDelay(undefined, 3000);
const prom4 = getPromiseWithDelay('15', 4000);
const prom5 = getPromiseWithDelay(true, 5000);

const getSum = arr => {
  console.log(arr);
  const arr1 = arr.filter(value => !isNaN(value));
  console.log(arr1);
  return arr1.reduce((acc, val) => acc + Number(val), 0);
};
export const asyncSum = (...promises) =>
  Promise.all(promises)
    .then(numbers => getSum(numbers))
    .catch(() => Promise.reject(new Error("Can't calculate")));

asyncSum(prom1, Promise.reject(new Error('err')), prom3, prom4, prom5).then(res =>
  console.log(res),
);
