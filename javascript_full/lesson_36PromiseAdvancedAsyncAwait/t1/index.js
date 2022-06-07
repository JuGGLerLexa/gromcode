// async function func() {
//   const promise = new Promise(resolve => {
//     setTimeout(() => {
//       resolve(17);
//     }, 1000);
//   });
//   const result = await promise;
//   console.log(result);
//   console.log('Hello');
//   return 1;
// }

// const result = func();
// console.log('Hi');

// not work beac, it's not asyn...

// const promise = new Promise(resolve => {
//     setTimeout(() => {
//         resolve(17);
//     }, 1000);
// })
// const result = await promise;
// console.log(result);
// console.log('Hello');

// const getUser = async userId => {
//   try {
//     const response = await fetch(`https://api.github.com/users/${userId}`);
//     if (!response.ok) {
//       return null;
//     }
//     const userData = await response.json();
//     return userData;
//   } catch (err) {
//     throw new Error('Failed to fetch user');
//   }
// };

// getUser('facebook')
//   .then(userData => console.log(userData))
//   .catch(err => alert(err.message));

// in task

export const fetchUser = async userId => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (!response.ok) {
      return null;
    }
    const userData = await response.json();
    return userData;
  } catch (err) {
    throw new Error('Failed to get user data');
  }
};
