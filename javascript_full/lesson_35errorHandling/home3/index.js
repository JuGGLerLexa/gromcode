import { fetchUserData } from './gateways.js';
import { renderUserData } from './user.js';

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};

renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form_btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
  const userName = userNameInputElem.value;
  fetchUserData(userName).then(userData => {
    renderUserData(userData);
  });
};
showUserBtnElem.addEventListener('click', onSearchUser);
