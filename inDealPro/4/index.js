function foo(time, str, callback) {
  setTimeout(() => {
    callback(str + ' world!');
  }, time);
}

foo(3000, 'Hello', responseStr => {
  console.log(responseStr);
});

//  in my answear: callback
