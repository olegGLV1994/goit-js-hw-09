import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
flatpickr('input#datetime-picker', options);

const refs = {
  btnStart: document.querySelector('button'),
  value: document.querySelectorAll('.value'),
};
refs.btnStart.addEventListener('click', onStartButton);

const sale = {
  start() {
    const days = Date.now();
    setInterval(() => {
      const dayInterval = Date.now();
      const allDay = dayInterval - days;
      const time = convertMs(allDay);
      console.log(time);
    }, 1000);
  },
};
sale.start();

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
