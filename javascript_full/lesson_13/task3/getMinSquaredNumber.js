export const minDouble = arr => {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  const minSquare = Math.min(...arr.map(el => el * el));

  return minSquare;
};

console.log(minDouble([-777, 3, -2, 6, 45, -20])); // => 4
