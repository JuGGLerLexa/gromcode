const reverseString = str => {
  if (typeof str !== 'string') return null;
  return str.split('').reverse().join('');
};

console.log(reverseString('Lexa'));
console.log(reverseString(null));
console.log(reverseString(123));
console.log(reverseString('Good day today'));
