console.log('Code before promise');

const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function timer1() {
    resolve('Promise result');
  }, 2000);
});

function onSuccess(data) {
  console.log(data);
}

myPromise.then(onSuccess);

console.log('Some text');
