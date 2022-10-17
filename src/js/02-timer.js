import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const refs = {
  btnStart: document.querySelector('button'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
refs.btnStart.disabled = true;
let onClickStartTimer = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      window.alert('Please choose a date in the future');
    } else if (selectedDates[0] > new Date()) {
      refs.btnStart.disabled = false;
    }
    refs.btnStart.addEventListener('click', () => {
      refs.btnStart.disabled = true;
      onClickStartTimer = setInterval(() => {
        const allDay = selectedDates[0] - new Date();
        const time = convertMs(allDay);
        onStartValue(time);
        if (selectedDates[0] === new Date()) {
          clearInterval(onClickStartTimer);
        }
      }, 1000);
    });
  },
};

flatpickr('input#datetime-picker', options);

function onStartValue({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
