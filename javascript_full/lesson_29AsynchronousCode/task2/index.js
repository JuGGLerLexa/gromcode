export const pinger = (count, period) => {
  let i = count;
  console.log('Ping');

  const interval = setInterval(() => {
    // eslint-disable-next-line no-plusplus
    if (--i > 0) {
      console.log('Ping');
    } else {
      clearInterval(interval);
    }
  }, period);
};

// examples
pinger(5, 100);
