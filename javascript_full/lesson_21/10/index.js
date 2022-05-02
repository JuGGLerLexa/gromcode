export const manegeClasses = () => {
  document.querySelector('.one').classList.add('selected');
  document.querySelector('.two').classList.remove('selected');
  document.querySelector('.three').classList.toggle('three_done');
  if (document.querySelector('.four').classList.contains('some-class')) {
    document.querySelector('.four').classList.add('another-class');
  }
};
