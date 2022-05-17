// const text = 'message';

// const myMessage = `
//     The text is ${text.toUpperCase()},
//     And something else.
// `;

// console.log(myMessage);

// console.log(text.charAt(text.length));

// text[2] = 'Q';

// console.log('text'.concat('asd'));
// // console.log('text' + 'asd');
// console.log('text'.split(''));

// console.log('some text'.slice(2, 7));

const splitText = (text, len) => {
  const strArr = [];
  let startPosition = 0;

  while (true) {
    const chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  }

  return strArr.join('\n');
};

// 1. 'abcdefg', 4 => ['abcd', 'efg'] => ['Abcd', 'Efg']
// => 'Abcd/nEfg'

console.log(splitText('abcdefg', 4));
