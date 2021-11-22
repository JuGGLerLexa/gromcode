const num = [1, 2, 3, 4, 3, 4, 3, 4, 5, 6, 7, 6, 8, 2, 4];
function removeDuplicates(array) {
  const seen = [];
  const out = [];
  const len = array.length;
  let j = 0;
  for (let i = 0; i < len; i += 1) {
    const item = array[i];
    if (seen[item] !== 1) {
      seen[item] = 1;
      out[j += 1] = item;
    }
  }
  return out;
}

console.log(removeDuplicates(num));
