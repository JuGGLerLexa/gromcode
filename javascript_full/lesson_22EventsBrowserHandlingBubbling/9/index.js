const checkbox = document.querySelector('.task-status');

checkbox.addEventListener('change', el => {
  if (el.target.checked) {
    console.log(true);
  } else console.log(false);
});
