export const finishList = () => {
  const list = document.querySelector('.list');
  const special = document.querySelector('.special');

  const append = document.createElement('eight');
  append.textContent = 8;
  list.append(append);

  const prepend = document.createElement('one');
  prepend.textContent = 1;
  list.prepend(prepend);

  const before = document.createElement('four');
  before.textContent = 4;
  special.before(before);

  const after = document.createElement('six');
  after.textContent = 6;
  special.after(after);
};

finishList();
