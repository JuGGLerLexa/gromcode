const checkbox = document.querySelector('.task-status');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    console.log(true);
  } else console.log(false);
});
