const successPromise = new Promise(resolve => {
  resolve(32);
});

successPromise
  .then(number => number / 2)
  .then(number => number * number)
  .then(result => console.log(result));

successPromise.then(number => number + 288).then(result => console.log(result)); // 320

console.log(
  '!!! Обрати внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!',
);
