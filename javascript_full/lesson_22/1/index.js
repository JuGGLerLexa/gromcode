const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const logTarget = (text, color) => {
  const eventsListElem = document.querySelector('.events');
  eventsListElem.innerHTML += `<span style="color: ${color}: margin-left 8px">${text}</>`;
};

const logGrteenDiv = logTarget.bind(null, 'DIV', 'green');

const logGrteenP = logTarget.bind(null, 'P', 'green');

const logGrteenSpan = logTarget.bind(null, 'SPAN', 'green');

divElem.addEventListener('click', logGrteenDiv);

pElem.addEventListener('click', event => {
  event.stopPropagation();
});

spanElem.addEventListener('click', logGrteenSpan);

// elem.addEventListener('click', () => {
//   console.log('div1');
// });

// const handler = () => {
//   console.log('div');
// }

// elem.addEventListener('click', handler);

// elem.removeEven tListener('click', handler);
