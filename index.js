const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const formatTimer = (seconds) => {
  let hours = Math.floor(seconds / 3600)
  let minutes = Math.floor((seconds % 3600) / 60)
  let remainingSeconds = Math.floor(seconds % 60)

  const addZero = (number) => (number < 10 ? "0" + number : number)
  return `${addZero(hours)}:${addZero(minutes)}:${addZero(remainingSeconds)}`
}
const createTimerAnimator = () => {
  return (seconds) => {

    let timerInterval = setInterval(() => {
      timerEl.innerHTML = formatTimer(seconds)
      if (Number(seconds) === 0) {
        clearInterval(timerInterval)
      }
      seconds--
    }, 1000)
  }
};
const animateTimer = createTimerAnimator();
inputEl.addEventListener('input', () => {

  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^\d]/g, '')
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);

  inputEl.value = '';
});
