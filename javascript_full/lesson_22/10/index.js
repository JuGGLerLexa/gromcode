const pagination = Array.from(document.querySelectorAll('.pagination__page'));
const first = pagination[0];
const second = pagination[1];
const third = pagination[2];

const handleClick = el => {
  console.log(el.target.dataset.pageNumber);
};

first.addEventListener('click', handleClick);
second.addEventListener('click', handleClick);
third.addEventListener('click', handleClick);
