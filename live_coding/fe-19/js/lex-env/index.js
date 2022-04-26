/* eslint-disable */

// GLOBAL LEX ENV
// {
//   'enviromentRecord': {
//     'message': 'Test',
//     'weight': 55,
//     'run': {
//         console.log('RUN');
//      },
//      'createMessenger': { ..},
//      'messanger': ....
//   },
//   'outherLexicalEnv': null
// }

// createMessenger
// {
//  'enviromentRecord': ...
// 'message': ...
//  'sender': ...
//  'sendMessage':...
// 'setSender':...
// 'setMessage':...
// }

const message = 'Test';
const weight = 55;

function run() {
    console.log('RUN');
}

//  run() - LEX ENV
// {
// enviromentRecord
// }

// if (false) {
//     function sum(a, b) {
//         return a + b;
//     }
// }

// sum(5, 10);

function createMessenger() {
    let message = 'Just learn it';
    let sender = 'Gromcode';

    function sendMessage(name) {
        console.log(`${name}, ${message}! Your ${sender}`);
    }

    function setSender(newSender) {
        sender = newSender;
    }

    function setMessage(text) {
        message = text;
    }

    sendMessage('Jack');
    // return {
    //     sendMessage,
    //     setMessage,
    //     setSender,
    // };
}

createMessenger();
// const messanger = createMessenger();
// messanger.sendMessage('Ann');

// run();