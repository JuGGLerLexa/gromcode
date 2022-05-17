const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const eventsListElem = document.querySelector('.events-list');

const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

const btnAttachHandleds = document.querySelector('.attach-handlers-btn');
const attachHandleds = () => {
  divElem.addEventListener('click', logGreyDiv, { capture: true });
  divElem.addEventListener('click', logGreenDiv);

  pElem.addEventListener('click', logGreyP, { capture: true });
  pElem.addEventListener('click', logGreenP);

  spanElem.addEventListener('click', logGreySpan, { capture: true });
  spanElem.addEventListener('click', logGreenSpan);
};

attachHandleds();
btnAttachHandleds.addEventListener('click', attachHandleds);

const btnClear = document.querySelector('.clear-btn');
const clearEventsList = () => {
  eventsListElem.innerHTML = null;
};
btnClear.addEventListener('click', clearEventsList);

const btnRemoveHandleds = document.querySelector('.remove-handlers-btn');
const disableHandleds = () => {
  divElem.removeEventListener('click', logGreyDiv, true);
  divElem.removeEventListener('click', logGreenDiv);

  pElem.removeEventListener('click', logGreyP, { capture: true });
  pElem.removeEventListener('click', logGreenP);

  spanElem.removeEventListener('click', logGreySpan, { capture: true });
  spanElem.removeEventListener('click', logGreenSpan);
};
btnRemoveHandleds.addEventListener('click', disableHandleds);
