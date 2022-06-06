export const fetchUserData = userName => {
  return fetch(`https://api.github.com/user/${userName}`).then(response => response.json());
};
