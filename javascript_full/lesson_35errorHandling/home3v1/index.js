const baseUrl = 'https://api.github.com/users';
const userNameInp = document.querySelector('.name-form__input');
const userNameEl = document.querySelector('.user__name');
const userLocationEl = document.querySelector('.user__location');
const showBtn = document.querySelector('.name-form__btn');
const avatarEl = document.querySelector('.user__avatar');
const repoList = document.querySelector('.repo-list');
const spinnerEl = document.querySelector('.spinner');

avatarEl.src = 'https://avatars3.githubusercontent.com/u10001';

const userRequest = userId => fetch(`${baseUrl}/${userId}`).then(response => response.json());

const createDomEl = repoName => {
  const repoEl = document.createElement('span');
  repoEl.textContent = repoName;
  repoEl.classList.add('repo-list__item');
  return repoEl;
};

const onBtnClick = () => {
  spinnerEl.classList.toggle('spinner_hidden');
  const userId = userNameInp.value;
  userRequest(userId)
    .then(res => {
      avatarEl.src = res.avatar_url;
      userNameEl.textContent = res.name;
      userLocationEl.textContent = res.location ? `from ${res.location}` : '';
      fetch(res.repos_url)
        .then(response => response.json())
        .then(reposArr => {
          repoList.textContent = '';
          reposArr.map(repo => repoList.append(createDomEl(repo.name)));
        })
        .catch(() => alert('Failed to load data'));
    })
    .then(() => spinnerEl.classList.toggle('spinner_hidden'))
    .catch(() => alert('Failed to load data'));

  userNameInp.value = '';
};

showBtn.addEventListener('click', onBtnClick);
