let remember = 0;

export function add(number) {
  remember += number;
}

export function decrease(number) {
  remember -= number;
}

export function reset(number) {
  remember = number * 0;
}

export function getMemo() {
  return remember;
}

// console.log(add(10));
// console.log(decrease(2));
// console.log(reset(35));
// console.log(getMemo(41));
