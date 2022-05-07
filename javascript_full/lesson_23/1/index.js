/* eslint-disable consistent-return */
const arenaEl = document.querySelector('.arena');
const boardSeatEl = document.querySelector('.board__selected-seat');

const getNubersArr = (from, to) => {
  const res = [];
  for (let i = from; i <= to; i += 1) {
    res.push(i);
  }
  return res;
};

const getLinesSeat = () =>
  getNubersArr(1, 10)
    .map(
      el => `
  <div
    class="sector__seat"
    data-seat-number="${el}"
  ></div>
  `,
    )
    .join('');

const getSectorLines = () => {
  const seats = getLinesSeat();
  return getNubersArr(1, 10)
    .map(
      el => `
  <div
    class="sector__line"
    data-line-number="${el}"
  >${seats}</div>
  `,
    )
    .join('');
};

const renderArena = () => {
  const lines = getSectorLines();
  const innerStr = getNubersArr(1, 3)
    .map(
      el => `
  <div
    class="sector"
    data-sector-number="${el}"
  >${lines}</div>
  `,
    )
    .join('');
  arenaEl.innerHTML = innerStr;
};

const onSeatClick = event => {
  const isSeat = event.target.classList.contains('sector__seat');

  if (!isSeat) return null;

  const seatNum = event.target.dataset.seatNumber;
  const lineNum = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNum = event.target.closest('.sector').dataset.sectorNumber;

  boardSeatEl.textContent = `S ${sectorNum} - L ${lineNum} - S ${seatNum}`;
};

arenaEl.addEventListener('click', onSeatClick);

renderArena();
