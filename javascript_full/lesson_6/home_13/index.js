// put your code here

const arr = [4, 1, 4, 5, 7, 8, 7];

function uniqueCount(arr) {
  if (!Array.isArray(arr)) return null;
  const a = [...new Set(arr)];
  return a.length;
}

console.log(uniqueCount(arr));
// uniqueCount(arr);
