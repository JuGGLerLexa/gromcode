// inp: str, str
// out: num

const countOccurrences = (text, str) => {
  if (str === '') return null;
  return text.split(str).length - 1;
};

console.log(countOccurrences('asdfghasdfgasdf', 'asd')); // 3
