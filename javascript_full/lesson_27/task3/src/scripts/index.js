import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './renderer';

document.querySelector('.DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandlers();
});
const onStorageChange = event => {
  if (event.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);
