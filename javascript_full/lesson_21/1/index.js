const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pickup up Tom from airport', done: true },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: false },
];

const renderListItems = listItems => {
  const listItem = document.querySelector('.list');

  const listItemsElems = listItems
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemsElem = document.createElement('li');
      listItemsElem.classList.add('list__item');
      if (done) {
        listItemsElem.classList.add('list__item-checkbox');
      }
      const checkboxElem = document.createElement('input');
      checkboxElem.setAttribute('type', 'checkbox');
      checkboxElem.checked = done;
      checkboxElem.classList.add('list__item-checkbox');
      listItemsElem.append(text);

      return listItemsElem;
    });

  listItem.append(...listItemsElems);
};

renderListItems(tasks);
// 38
