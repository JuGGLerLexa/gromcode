const tasks = ['Buy milk', 'Pickup up Tom from airport', 'Visit party', 'Buy meat'];

const renderListItems = listItems => {
  const listItem = document.querySelector('.list');

  const listItemsElems = listItems.map(itemText => {
    const listItemsElem = document.createElement('li');
    listItemsElem.classList.add('list__item');
    const checkboxElem = document.createElement('input');
    checkboxElem.setAttribute('type', 'checkbox');
    checkboxElem.classList.add('list__item-checkbox');
    listItemsElem.append(itemText);

    return listItemsElem;
  });

  listItem.append(...listItemsElems);
};

renderListItems(tasks);
// 38
