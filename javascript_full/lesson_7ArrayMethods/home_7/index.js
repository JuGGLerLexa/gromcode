const filterNames = (arr, text) => {
  const nameFilter = arr.filter(arr => {
    return arr.length > 5 && arr.includes(text);
  });
  return nameFilter;
};
// test data:

const names = ['John', 'Olivya', 'Kolya', 'Emanuel', 'Venya', 'Lera'];
console.log(filterNames(names, 'ya')); // olivya
