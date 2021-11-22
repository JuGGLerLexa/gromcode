// put your code here
// input: arr ...
// outinput: bool

// за умовою задачі два цикла... де будемо перераховувати довжину масива

const checker = arr => {
  let max = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > max) max = arr[i];
  }

  let min = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < min) min = arr[i];
  }

  if (max + min > 1000) return true;
  return false;
};

const randomNum = [1, 2, 3, 4, 5];
const randomNum1 = [1222, 2, 3, 43321, 5];

console.log(checker(randomNum));
console.log(checker(1));
console.log(checker(randomNum1));
