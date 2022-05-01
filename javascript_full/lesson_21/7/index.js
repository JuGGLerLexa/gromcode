export const createButton = buttonText => {
  const createButton = document.createElement('button');
  createButton.textContent = buttonText;
  document.querySelector('body').append(createButton);
};
