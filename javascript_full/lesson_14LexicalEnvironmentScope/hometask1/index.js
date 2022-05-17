let message = 'Just learn it';

export function sendMessage(name = 'Ann') {
  console.log(`${name}, ${message}! Your Gromcode`);
}

export const setMessage = (text = 'Good job') => {
  message = text;
};
