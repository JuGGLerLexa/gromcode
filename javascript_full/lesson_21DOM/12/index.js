export const getSection = num => {
  const getSpan = document.querySelector(`span[data-number="${num}"]`);
  return getSpan.closest('.box').dataset.section;
};
