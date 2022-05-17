// sendMassege
// 'use strict';

let message = 'Just learn it!';

function sendMassage(name) {
  const sender = 'Gromcode';

  console.log(`${name}, ${message}, You ${sender}`);
}

function setMassege(text) {
  message = text;
}

sendMassage('Tom');

setMassege('Hello!');

sendMassage('Tom');
