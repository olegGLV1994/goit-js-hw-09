const btnStart = document.querySelector('button');
const btnStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
btnStart.addEventListener('click', onClickStart);
btnStop.addEventListener('click', onClickStop);
let onCloseClick = null;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickStart() {
  onCloseClick = setInterval(() => {
    btnStart.disabled = true;
    btnStop.disabled = false;
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onClickStop() {
  clearInterval(onCloseClick);
  btnStop.disabled = true;
  btnStart.disabled = false;
}
