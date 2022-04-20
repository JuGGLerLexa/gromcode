// function compareObjects(obj1, obj2) {
//   const keys = Object.keys(obj1);
//   console.log(keys);
//   if (keys.length !== Object.keys(obj2).length) {
//     return false;
//   }
//   return keys.every(el => obj1[el] === obj2[el]);
// }

// function compareObjects(obj1, obj2) {
//   const result = Object.keys({ ...obj1, ...obj2 });
//   if (Object.keys(obj1).length != Object.keys(obj2).length) {
//     return false;
//   }
//   return result.every(key => obj1[key] === obj2[key]);
// }

// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   const values1 = Object.values(obj1);
//   const values2 = Object.values(obj2);

//   const isKeysEqual = keys1.every((value, index) => value === keys2[index]);
//   const isValueEqual = values1.every((value, index) => value === values2[index]);

//   if (!isKeysEqual || !isValueEqual || keys1.length !== keys2.length) {
//     return false;
//   }

//   return true;
// }

// задавати правильні питання:
// в мене не працюєю !==
// я зробив, але інтуєктивно можна краще

// function compareObjects(obj1, obj2) {
//   const firstArraKeyVal = [...Object.keys(obj1), ...Object.values(obj1)];
//   const secondArraKeyVal = [...Object.keys(obj2), ...Object.values(obj2)];

//   if (!firstArraKeyVal.length === secondArraKeyVal.length) {
//     return false;
//   }
//   return firstArraKeyVal.every((key, index) => key === secondArraKeyVal[index]);
// }

// function compareObjects(obj1, obj2) {
//   const keys = Object.keys(obj1);

//   if (keys.length !== keys(obj2).length) {
//     return false;
//   }

//   for (const key of keys) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// function compareObjects(obj1, obj2) {
//   const keys1 = Object.keys(obj1);
//   const values1 = Object.values(obj1);
//   const keys2 = Object.keys(obj2);
//   const values2 = Object.values(obj2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   return keys1.every((el, index) => {
//     return el === keys2[index] && values1[index] === values2[index];
//   });
// }

// Oleg

// function compareObjects(obj1, obj2) {
//   const key1 = Object.keys(obj1);
//   const key2 = Object.keys(obj2);

//   if (key1.length !== key2.length) {
//     return false;
//   }

//   return key1.reduce((acc, key) => {
//     return acc && obj1[key] === obj2[key];
//   }, true);
// }

// Valentina

// function compareObjects(obj1, obj2) {
//   // const prop1 = Object.entries(obj1);
//   // const prop2 = Object.entries(obj2);

//   // if (prop1.length !== prop2.length) {
//   //   return false;
//   // }

//   return _.isEqual(obj1, obj2);
// }

// // V2
// function compareObjects(obj1, obj2) {
//   return Object.keys({ ...obj1, ...obj2 }).every(element => obj1[element] === obj2[element]);
// } // метод мердж ({ ...obj1, ...obj2 })

// // V3
// function compareObjects4(obj1, obj2) {
//   const arr = Object.entries(obj1).join() === Object.entries(obj2).join();

//   return arr;
// }

// function compareObjects(obj1, obj2) {
//   return (
//     Object.keys(obj1).length === Object.keys(obj2).length &&
//     Object.keys(obj1).every(key => obj1[key] === obj2[key])
//   );
// }

// // test data
// const obj2 = {
//   name: 'Bob',
//   age: 17,
// };

// const obj3 = {
//   age: 17,
//   name: 'Bob',
// };

// console.log((obj2, obj3));

// Mikhail

// function compareObjects(obj1, obj2) {
//   const arr1 = Object.entries(obj1);
//   const arr2 = Object.entries(obj2);

//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   // return arr1.every(
//   //   (arr, index) => arr[0] === arr2[index][0] && arr[1] === arr2[index][1]
//   // );

//   return !arr1.some((arr, index) => arr[0] !== arr2[index][0] || arr[1] !== arr2[index][1]);
// }
