// const createMessenger = () => {
//   let message = 'Just learn it';
//   let sender = 'Gromcode';
//   function sendMessage(name) {
//     console.log(`${name}, ${message}! Your ${sender}`);
//   }

//   function setMessage(text) {
//     message = text;
//   }

//   function setSender(text) {
//     sender = text;
//   }

//   return {
//     sendMessage,
//     setMessage,
//     setSender,
//   };
// };

// export default createMessenger;

// // examples
// const messanger1 = createMessenger();
// messanger1.sentMessage('Anna'); // ===> Hello, Anna! Just learn it! This message was sent by Gromcode

// const messanger2 = createMessenger();
// messanger2.setMessage('You are learning JS and you do it well');
// messanger2.sentMessage('Michael'); // ===> Hello, Michael! You are learning JS and you do it well! This message was sent by Gromcode

// const messanger3 = createMessenger();
// messanger3.setMessage('The weather is amazing today');
// messanger3.senSender('Anna');
// messanger3.sentMessage('Alex'); // ===> Hello, Alex! The weather is amazing today! This message was sent by Anna

export default function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function setMessage(text) {
    message = text;
  }
  function setSender(text) {
    sender = text;
  }
  function sendMessage(text) {
    const name = text;
    console.log(`Hello, ${name}! ${message}! This message was sent by ${sender}`);
  }
  return {
    setMessage,
    setSender,
    sendMessage,
  };
}

// examples
const messanger1 = createMessenger();
console.log(messanger1.setMessage('Anna')); // ===> Hello, Anna! Just learn it! This message was sent by Gromcode

const messanger2 = createMessenger();
console.log(messanger2.setMessage('You are learning JS and you do it well'));
messanger2.setMessage('Michael'); // ===> Hello, Michael! You are learning JS and you do it well! This message was sent by Gromcode

const messanger3 = createMessenger();
messanger3.setMessage('The weather is amazing today');
messanger3.setSender('Anna');
messanger3.setMessage('Alex'); // ===> Hello, Alex! The weather is amazing today! This message was sent by Anna
