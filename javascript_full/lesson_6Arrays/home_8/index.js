/* eslint-disable no-param-reassign */
// put your code here
// input: arr
// outinput: arr (newArr, sort)
// я вражений якщо чесно :/

// put your code here
// [...twoDay] 2 дні з цією задачою возився

function sortAsc(array) {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        const tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

function sortDesc(array) {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] < array[i]) {
        done = false;
        const tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

const numbers = [12, 10, 15, 11, 14, 13, 16];
const numbers1 = [12, 10, 15, 11, 14, 13, 16];
sortAsc(numbers);
console.log(numbers);
sortDesc(numbers1);
console.log(numbers1);
