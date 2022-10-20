import Notiflix from 'notiflix';
const refs = {
  form: document.querySelector('form'),
  amount: document.querySelector('input[name=amount]'),
  step: document.querySelector('input[name=step]'),
  delay: document.querySelector('input[name=delay]'),
};
let amount = Number(refs.amount.value);
let delay = Number(refs.delay.value);
let step = Number(refs.step.value);

refs.form.addEventListener('submit', addValueResault);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}

function addValueResault(evt) {
  evt.preventDefault();
  for (let x = 1; x <= amount; x++) {
    createPromise(x, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.warning(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        }, delay);
      });
    delay += step;
  }
}
