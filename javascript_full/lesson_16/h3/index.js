export function createArrayOfFunctions(num) {
  const arr = [];

  if (typeof num !== 'number') return null;
  if (!num) return arr;

  for (let i = 0; i < num; i += 1) {
    arr[i] = function () {
      return i;
    };
  }
  return arr;
}

console.log(createArrayOfFunctions(9)[5]());
console.log(createArrayOfFunctions());
console.log(createArrayOfFunctions(1)[0]());
console.log(createArrayOfFunctions(414)[54]());
console.log(createArrayOfFunctions(345)[2]());
console.log(createArrayOfFunctions(3));
console.log(createArrayOfFunctions(12)[12]());
