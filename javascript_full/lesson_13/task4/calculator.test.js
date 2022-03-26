import { calc } from './calculator.js';

it('should plus', () => {
  const resultFirst = calc('5 + 2');

  expect(resultFirst).toEqual('5 + 2 = 7');
});

it('should minus', () => {
  const resultSecond = calc('5 - 2');

  expect(resultSecond).toEqual('5 - 2 = 3');
});

it('should multi', () => {
  const resultTh = calc('5 * 2');

  expect(resultTh).toEqual('5 * 2 = 10');
});

it('should /', () => {
  const resultFo = calc('49 / 7');

  expect(resultFo).toEqual('49 / 7 = 7');
});
