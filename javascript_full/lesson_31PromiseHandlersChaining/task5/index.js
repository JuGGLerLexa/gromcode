export const delay = time => {
  const p = new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
  return p;
};

// test data

delay(3000).then(() => console.log('Done'));
