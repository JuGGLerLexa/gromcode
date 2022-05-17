/* eslint-disable radix */
export const getDiff = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diff = Math.abs(end.getTime() - start.getTime());
  const day = parseInt(diff / (24 * 3600 * 1000));
  const hour = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minute = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  const result = `${day}d ${hour}h ${minute}m ${seconds}s`;
  return result;
};

// const result = getDiff(new Date(2019, 0, 17, 17, 10), new Date(2020, 0, 3));
// console.log(result);
