const checkSum = arr => {
  if (!Array.isArray(arr)) return null;

  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) sum += arr[i];

  return sum > 100;
};

// tests
console.log(checkSum(412));
console.log(checkSum([412]));
console.log(checkSum([311]));
