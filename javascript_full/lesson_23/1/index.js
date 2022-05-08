const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];
const addId = () => {
  return tasks.map(el => (el.id = Math.random().toString()));
};
const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  addId();
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};
renderTasks(tasks);
console.log(tasks);
const buttonElem = document.querySelector('.create-task-btn');
const taskInputElem = document.querySelector('.task-input');

const addTaskList = () => {
  if (taskInputElem.value === '') {
    return;
  }
  const elemTasks = { text: taskInputElem.value, done: false };

  tasks.push(elemTasks);
  listElem.innerHTML = '';
  taskInputElem.value = '';

  renderTasks(tasks);
};

buttonElem.addEventListener('click', addTaskList);

const onChekbox = event => {
  const isSeat = event.target.dataset.id;

  if (!isSeat) {
    return;
  }
  const clickCheck = tasks.find(el => el.id === isSeat);

  if (clickCheck.done === true) {
    clickCheck.done = false;
  } else {
    clickCheck.done = true;
  }

  listElem.innerHTML = '';
  renderTasks(tasks);
};

listElem.addEventListener('click', onChekbox);

console.log(tasks);
