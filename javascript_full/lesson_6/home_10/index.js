const getSubArray = (arr, numberOfElements) => {
  // put your code here
  const res = [];
  for (let i = 0; i < numberOfElements; i += 1) {
    res.push(arr[i]);
  }
  return res;
};
const num = [1, 2, 150, 100, 50, 20];

console.log(getSubArray(num, 3));
