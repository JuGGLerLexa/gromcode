// simple assertions

it('17 и в Африке 17', () => {
  expect(17).toEqual(17);
});

it('18 это вам не 17', () => {
  expect(18).not.toEqual(17);
});
