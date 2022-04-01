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
