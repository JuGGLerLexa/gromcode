function getMaxAbsoluteNumber(arr) {
  if (!Array.isArray(arr) || arr.length < 1) {
    // перевірка на масив
    return null;
  }
  const array = arr.map(i => {
    return Math.abs(i); // The Math.abs() method returns the absolute value of a number.
  });
  const result = Math.max(...array); // через декілька днів рефакторингу в гуглі натикаюсь і згадую за спред оператор :( "вік живи - вік вчись."
  return result;
}

// test
console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
console.log(getMaxAbsoluteNumber([2.1, 0, 1.6])); // ===> 2.1
console.log(getMaxAbsoluteNumber([-6, 3, 5, -1])); // ===> 6
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20])); // ===> 777
