// MDN in filter

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 7);

// console.log(result);
// // expected output: Array ["exuberant", "destruction", "present"]

// const array = [77, 66, 13, 4];
// console.log(array);

// input: arr, funcc
// out: arr

// callback
// input: el, index, array
// out:

// algo:
// 1. iterate arr
// 2. apply callback for every el
// 3. if callback true - add to the new arr
// const filterArrayElements = (arr, callback) => {
//   const result = [];
//   for (let index = 0; index < arr.lenght; index += 1) {
//     const el = arr[index];
//     // console.log('el ' + el);

//     if (callback(el)) {
//       // console.log('el checked ' + el);

//       result.push(el);
//     }
//   }
//   return result;
// };

// // test data
// console.log(filterArrayElements([1, 4, 10, 30, 99], el => el % 2 === 1));

// refactoring

const filterArrayElements = (arr, callback) => {
  const result = [];

  for (let index = 0; index < arr.lenght; index += 1) {
    const el = arr[index];

    // console.log('el ' + el);
    if (callback(el, index, arr)) {
      // console.log('el checked ' + el);
      result.push(el);
    }
  }

  return result;
};

// test data
console.log(filterArrayElements([1, 4, 10, 30, 99], el => el % 2 === 1));

const arr = [77, 50, 66, -5, 0, 13, 4, 10];
const callb = el => {
  if (el % 5 === 0) {
    return true;
  }

  return false;
};

console.log(filterArrayElements(arr, callb));
