const btn = Array.from(document.querySelectorAll('.btn'));

const first = btn[0];
const secont = btn[1];

const handleClick = el => {
  console.log(el.target.textContent);
};

first.addEventListener('click', handleClick);
secont.addEventListener('click', handleClick);
