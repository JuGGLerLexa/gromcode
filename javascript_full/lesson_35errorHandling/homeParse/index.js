const first = JSON.stringify({ name: 'Lexa' });
const second = { name: 'Lexa' };

const parseUser = jsParse => {
  try {
    return JSON.parse(jsParse);
  } catch (err) {
    return null;
  }
};

console.log(first);
console.log(second);
