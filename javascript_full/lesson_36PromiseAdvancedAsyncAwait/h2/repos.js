const listElem = document.querySelector('.repo-list');

export const cleanReposList = () => {
  listElem.innerHTML = '';
};

export const renderRepos = reposList => {
  const reposListElems = reposList.map(({ name }) => {
    const listItem = document.createElement('li');
    listItem.classList.add('repo-list__item');
    listItem.textContent = name;

    return listItem;
  });

  cleanReposList();
  listElem.append(...reposListElems);
};
