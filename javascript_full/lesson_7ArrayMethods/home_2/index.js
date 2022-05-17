// input: arr
// out: newArr (новий масив..) reverse мутує.., можна використати slice разом із reverse методом, щоб запобігти мутування

const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.slice().reverse();
};

// test data

const test = [1, 2, 3, 4, 5];
console.log(reverseArray(test));

const test1 = (1, 2, 3, 4, 5);
console.log(reverseArray(test1)); // зрозумів помилку, виводив тест, а не тест1, на моменті інпутів, поради Андрія робити завжди, а не ігнорувати!!!!!!!!

const test2 = (2, 3);
console.log(reverseArray(test2));
