import { it } from 'eslint/lib/rule-tester/rule-tester';
import getMinSquaredNumber from './getMinSquaredNumber.js';

it('should min num', () => {
  const result = [-777, 3, -2, 6, 45, -20];

  expect(result).toEqual(4);
});

it('empty arr', () => {
  const result = [];

  expect(result).toEqual(null);
});

it('empty str', () => {
  const result = '';

  expect(result).toEqual(null);
});
