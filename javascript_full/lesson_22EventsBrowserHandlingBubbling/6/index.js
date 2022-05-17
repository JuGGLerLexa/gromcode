const btn = document.querySelector('.single-use-btn');

const click = () => {
  console.log(`clicked`);
  btn.removeEventListener('click', click);
};

btn.addEventListener('click', click);
