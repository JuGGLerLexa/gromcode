export default arr => {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  const minMinSquare = Math.min(...arr.map(el => el * el));

  return minMinSquare;
};

// console.log(default([-777, 3, -2, 6, 45, -20])); // => 4
