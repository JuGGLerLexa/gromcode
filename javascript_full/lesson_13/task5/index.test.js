import { reverseArray, withdraw } from './index.js';

it('should reverse', () => {
  const resultReverse = reverseArray([1, 2, 3, 4, 5]);

  expect(resultReverse).toEqual([5, 4, 3, 2, 1]);
});

it('should the balance is sufficient', () => {
  const resultBalanseIn = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

  expect(resultBalanseIn).toEqual(37);
});

it('should the balance is not enough', () => {
  const resultBalanseOut = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

  expect(resultBalanseOut).toEqual(-1);
});
