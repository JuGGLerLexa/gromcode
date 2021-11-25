// input: arr
// outinput: newArr

// якщо переданий не масив виводимо null,
// якщо масив клонуємо його

const cloneArr = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice();
};

const num = [1, 2, 3, 4, 5];
console.log(cloneArr(num));
console.log(num);
