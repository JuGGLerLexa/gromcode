function sortDesc(array) {
  const newArray = [...array];
  return newArray.sort((a, b) => a - b);
}

const num = [21, 111, 114215, 21431, 43];
console.log(sortDesc(num));
