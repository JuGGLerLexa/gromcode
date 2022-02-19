const splitText = (str, num = 10) => {
  if (typeof str !== 'string') return null;
  const startArr = [];
  let startPosition = 0;

  while (true) {
    let chunk = str.substr(startPosition, num);
    if (chunk.length === 0) break;
    if (chunk.length < num) chunk += '.'.repeat(num - chunk.length);
    startArr.push(chunk[0] + chunk.slice(1));
    startPosition += num;
  }
  return startArr;
};

// test data
console.log(splitText('abcd efhg', 4));
console.log(splitText('abcdefhg', 4));
console.log(splitText('f', 1));
console.log(splitText(1, 1));
