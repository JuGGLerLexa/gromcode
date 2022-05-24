const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

const dafaultAvatar = '';

userAvatarElem.src = dafaultAvatar;

//

//

const fetchUserData = userName => {
  fetch(`https://api.github.com/users/${userName}`);
};

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
  const userName = userNameInputElem.value;
  fetchUserData(userName);
};

showUserBtnElem.addEventListener('click', onSearchUser);
