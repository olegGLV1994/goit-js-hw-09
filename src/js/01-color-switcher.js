const btnStart = document.querySelector('button');
const btnStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
btnStart.addEventListener('click', onClickStart);
btnStop.addEventListener('click', onClickStop);
const onCloseClick = null;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
