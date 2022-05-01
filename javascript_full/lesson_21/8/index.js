export const finishList = () => {
  const list = document.querySelector('.list');
  const special = document.querySelector('.special');

  const append = document.createElement('li');
  append.textContent = 8;
  list.append(append);

  const prepend = document.createElement('li');
  prepend.textContent = 1;
  list.prepend(prepend);

  const before = document.createElement('li');
  before.textContent = 4;
  special.before(before);

  const after = document.createElement('li');
  after.textContent = 6;
  special.after(after);
};

finishList();
