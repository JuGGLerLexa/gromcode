/* eslint-disable consistent-return */
// input: arr
// out: arr

// algo
// if === str => null
//    not                      отсечь лишнии пробелмы можно методом trim
// 2 знака после комы.. toFixe(2)
// add $ in return

const cleanTransactionsList = arr => {
  // eslint-disable-next-line array-callback-return
  const result = arr.filter(num => {
    if (Number(num)) return num;
  });
  return result.map(num => '$' + Number(num).toFixed(2));
};

// test data

const testArray = ['   1.9 ', '16.4', 17, ' 1 dollar '];
console.log(cleanTransactionsList(testArray)); // => ['$1.90', '$16.40', '$17.00']
