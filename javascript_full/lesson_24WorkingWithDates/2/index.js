// const formatter = new Intl.DateTimeFormat('en', {
//   timeZone: 'UTC',
//   hour: '2-digit',
//   minute: '2-digit',
//   hour12: false,
// });

// const getTime = date => formatter.format(date);

// console.log(getTime(new Date()));

export const formatter = new Intl.DateTimeFormat('en', {
  timeZone: 'UTC',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

export const getGreenwichTime = date => formatter.format(date);
