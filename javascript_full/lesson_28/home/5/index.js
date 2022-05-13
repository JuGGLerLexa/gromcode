export const shmoment = data => {
  const momentData = new Date(data);

  const calcData = {
    add(text, number) {
      if (text === 'years') momentData.setFullYear(momentData.getFullYear() + number);
      if (text === 'months') momentData.setMonth(momentData.getMonth() + number);
      if (text === 'days') momentData.setDate(momentData.getDate() + number);
      if (text === 'hours') momentData.setHours(momentData.getHours() + number);
      if (text === 'minutes') momentData.setMinutes(momentData.getMinutes() + number);
      if (text === 'seconds') momentData.setSeconds(momentData.getSeconds() + number);
      if (text === 'milliseconds')
        momentData.setMilliseconds(momentData.getMilliseconds() + number);
      return this;
    },

    subtract(text, number) {
      if (text === 'years') momentData.setFullYear(momentData.getFullYear() - number);
      if (text === 'months') momentData.setMonth(momentData.getMonth() - number);
      if (text === 'days') momentData.setDate(momentData.getDate() - number);
      if (text === 'hours') momentData.setHours(momentData.getHours() - number);
      if (text === 'minutes') momentData.setMinutes(momentData.getMinutes() - number);
      if (text === 'seconds') momentData.setSeconds(momentData.getSeconds() - number);
      if (text === 'milliseconds')
        momentData.setMilliseconds(momentData.getMilliseconds() - number);
      return this;
    },

    result() {
      return momentData;
    },
  };

  return calcData;
};

// test data
const testData = new Date(2020, 0, 7, 17, 17, 17);
console.log(testData);

const result = shmoment(testData).add('minutes', 8).subtract('years', 4).result();
console.log(new Date(result));
