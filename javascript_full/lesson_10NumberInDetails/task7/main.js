const superRound = (num, prec) => {
  const precPow = 10 ** prec;

  const res = [
    Math.floor(num * precPow) / precPow,
    Math.trunc(num * precPow) / precPow,
    Math.ceil(num * precPow) / precPow,
    Math.round(num * precPow) / precPow,
    +num.toFixed(prec),
  ];

  return res;
};

// examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
