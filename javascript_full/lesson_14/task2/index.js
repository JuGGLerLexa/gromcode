// messenger

const createMessenger = () => {
  function sendMassage(name) {
    const sender = 'Gromcode';

    console.log(`${name}, ${message}. YOu ${sender}`);
  }

  function setMassage(text) {
    message = text;
  }
  return {
    sendMassage,
    setMassage,
  };
};

const messenger = createMessenger();

messenger.sendMassage('Bob');
