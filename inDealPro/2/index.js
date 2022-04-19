function foo(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

console.log(foo(5)(2)(7));
