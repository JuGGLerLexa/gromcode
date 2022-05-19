// // requestUserData

// const requestUserData = userId => {
//   const p = new Promise((resolve, reject) => {
//     if (userId === 'broken') {
//       setTimeout(() => {
//         reject(new Error('User not found'));
//       }, 500);
//     } else {
//       setTimeout(() => {
//         resolve({
//           name: 'John',
//           age: 17,
//           email: `${userId}`,
//           userId,
//         });
//       }, 1000);
//     }
//   });

//   return p;
// };

// requestUserData('borken-1')
//   .then(data => console.log(data))
//   .catch(error => console.log(error))
//   .finally(() => console.log('finally'));

export const requestUserData = userId => {
  const p = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => reject(new Error('User not found')), 500);
    } else {
      setTimeout(
        () =>
          resolve({
            name: 'John',
            age: 17,
            userId,
            email: `${userId}@example.com`,
          }),
        1000,
      );
    }
  });

  return p;
};
