// task 1

import { reverseArray, withdraw, getAdults } from './index.js';

it('should reverse', () => {
  const resultReverse = reverseArray([1, 2, 3, 4, 5]);

  expect(resultReverse).toEqual([5, 4, 3, 2, 1]);
});

it('should reverse 2', () => {
  const resultReverse = reverseArray(1, 2, 3, 4, 5);

  expect(resultReverse).toEqual(null);
});

it('should reverse 3', () => {
  const resultReverse = reverseArray('2, 3');

  expect(resultReverse).toEqual(null);
});

// task 2

it('should the balance is sufficient', () => {
  const resultBalanseIn = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

  expect(resultBalanseIn).toEqual(37);
});

it('should the balance is not enough', () => {
  const resultBalanseOut = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

  expect(resultBalanseOut).toEqual(-1);
});

it('should the balance is not enough 3', () => {
  const resultBalanseOut3 = withdraw(
    ['Lexa', 'Igor', 'anonymous'],
    [2000, 100, 5000],
    'anonymous',
    4500,
  );

  expect(resultBalanseOut3).toEqual(500);
});

// task 3

it('should withdraw Adults users', () => {
  const resultAdults = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });

  expect(resultAdults).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should withdraw Adults users 2', () => {
  const resultAdultsSecond = getAdults({ Ann: 56, Andrey: 7 });

  expect(resultAdultsSecond).toEqual({ Ann: 56 });
});

it('should withdraw Adults users 3', () => {
  const resultAdults = getAdults({ Lexa: 22, Lera: 16 });

  expect(resultAdults).toEqual({ Lexa: 22 });
});
