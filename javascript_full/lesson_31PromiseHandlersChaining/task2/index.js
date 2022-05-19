// // asyncCalculator

// export const asyncCalculator = num =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       console.log(`Initial value: ${num}`);
//       resolve(num);
//     }, 3000);
//   })
//     .then(
//       value =>
//         new Promise(resolve => {
//           setTimeout(() => {
//             const result = value * value;
//             console.log(`Squared value: ${result}`);
//             resolve(result);
//           }, 3000);
//         }),
//     )
//     .then(value => {
//       const result = value * 2;
//       console.log(`Doubled value: ${result}`);
//       return result;
//     });

// asyncCalculator(4).then(value => console.log(value));

export const asyncCalculator = number => {
  const p = new Promise(resolve => {
    setTimeout(() => {
      console.log(`Initial value: ${number}`);
      resolve(number);
    }, 500);
  })
    .then(
      value =>
        new Promise(resolve => {
          const result = value ** 2;
          setTimeout(() => {
            console.log(`Squared value: ${result}`);
            resolve(result);
          }, 500);
        }),
    )
    .then(
      value =>
        new Promise(resolve => {
          const result = value * 2;
          console.log(`Doubled value: ${result}`);
          resolve(result);
        }),
    );

  return p;
};
