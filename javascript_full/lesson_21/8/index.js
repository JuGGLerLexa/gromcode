const finishList = () => {
  const list = document.querySelector('.list');
  const special = document.querySelector('.special');

  const eight = document.createElement('eight');
  eight.textContent = '8';
  list.append(eight);

  const one = document.createElement('one');
  one.textContent = '1';
  list.prepend(one);

  const four = document.createElement('four');
  four.textContent = '4';
  special.before(four);

  const six = document.createElement('six');
  six.textContent = '6';
  special.after(six);
};

finishList();
