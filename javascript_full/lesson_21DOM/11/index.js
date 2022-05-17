export const squaredNumbers = () => {
  const arrF = Array.from(document.querySelectorAll('.number')).map(el => {
    const num = el.dataset.number * el.dataset.number;
    el.setAttribute('data-squared-number', num);
    return el;
  });
  return arrF;
};
