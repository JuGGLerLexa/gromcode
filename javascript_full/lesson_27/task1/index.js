// // getLocalStorageData

// localStorage.clear();
// localStorage.setItem('hobbies', JSON.stringify({ name: 'Tom' }));
// localStorage.setItem('name', JSON.stringify('Tom'));
// localStorage.setItem('age', JSON.stringify(17));

// // console.log(localStorage.getItem('hobbies'));

// const getLocalStorageData = () => {
//   //   for (let i = 0; i < localStorage.length; i += 1) {
//   //     localStorage.key(i);
//   //   }
//   return Object.entries(localStorage).reduce((acc, [key, value]) => {
//     return {
//       ...acc,
//       [key]: value,
//     };
//   }, {});
// };

// console.log(getLocalStorageData());

export const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
};
