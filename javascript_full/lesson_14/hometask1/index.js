let message = 'Just learn it!';

const sendMessage = name => {
  const sender = 'Your Gromcode';

  console.log(`${name}, ${message} ${sender}`);
};

const setMessage = text => {
  message = text;
};

sendMessage('Ann');

setMessage('Good job');
sendMessage('Ann');
