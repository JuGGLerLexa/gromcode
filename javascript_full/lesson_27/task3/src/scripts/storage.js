const storage = {};

export const setItem = (key, value) => {
  //   localStorage.
  Object.assign(storage, { [key]: value });
};

export const getItem = key => storage[key];
