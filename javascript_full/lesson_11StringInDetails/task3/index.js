// input: str, num
// out: str

// algo
// якщо не стрінга виходимо з циклу
// ...

const splitText = (str, num) => {
  if (typeof str !== 'string') return null;
  const strtArr = [];
  let startPosition = 0;

  while (true) {
    const chunk = str.substr(startPosition, num);
    if (chunk.length === 0) break;
    strtArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += num;
  }
  return strtArr.join('\n');
};

// test data
console.log(splitText('abcd efhg', 4));
console.log(splitText('abcdefhg', 4));
console.log(splitText('f', 1));
console.log(splitText(1, 1));
