import Notiflix from 'notiflix';
const refs = {
  form: document.querySelector('form'),
  amount: document.querySelector('input[name=amount]'),
  step: document.querySelector('input[name=step]'),
  delay: document.querySelector('input[name=delay]'),
};

refs.form.addEventListener('submit', addValueResault);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
createPromise(2, 1500);

function addValueResault(e) {
  e.preventDefault();
  for (let i = 1; i <= refs.amount.value; i++) {
    createPromise(i, refs.delay.value)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.warning(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}
