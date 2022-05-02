/* eslint-disable */
export const squaredNumbers = () => {
  Array.from(document.querySelectorAll('.number')).forEach(
    el => (el.dataset.squaredNumbers = el.dataset.number * el.dataset.number),
  );
};
