// put your code here

// input: arr
// out: num

// getMinSquaredNumber.test.js

// [] => return null;

// | x |

//     x === x

// if (x !== -x) return null;
// if (x === []) return null;

// export default
const defaultt = arr => {
  if (!Array.isArray(arr)) return null;
  if (arr.length === 0) return null;
  const minMinSquare = Math.min(...arr.map(el => el * el));

  console.log(minMinSquare);
  return minMinSquare;
};

console.log(defaultt([-777, 3, -2, 6, 45, -20])); // => 4
