// const weekDays = ['Sun', 'Mon', 'Thu', 'Wed'];

// const getDayOfWeek = (date, days) => {
//   const day = new Date(date).getDate();
//   const dateInFuture = new Date(date).setDate(day + days);
//   return weekDays[new Date(dateInFuture).getDay()];
// };

// const result = getDayOfWeek(new Date(2019, 0, 1), 14);

// console.log(result);

export const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

export const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);
  return weekDays[new Date(dateInFuture).getDay()];
};

// const result = dayOfWeek(new Date(2019, 0, 6), 14);

// console.log(result);
