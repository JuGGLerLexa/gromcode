const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
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

const buttonEl = document.querySelector('.create-task-btn');
const inputElem = document.querySelector('.task-input');

const addTaskList = () => {
  if (inputElem.value === '') {
    return;
  }
  const elemTasks = { text: inputElem.value, done: false };

  tasks.push(elemTasks);
  listElem.innerHTML = '';
  inputElem.value = '';

  renderTasks(tasks);
};

buttonEl.addEventListener('click', addTaskList);

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
