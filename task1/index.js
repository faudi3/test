const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    calculateFormat(seconds);
    let interval = setInterval(() => {
      seconds -= 1;
      calculateFormat(seconds);
      if (seconds < 0) {
        clearInterval(interval);
        timerEl.innerHTML = "00:00:00";
      }
    }, 1000);
  };
};

// Новая функция,чтобы отсчет начался моментально,а не через секуду
const calculateFormat = (seconds) => {
  let hours = Math.floor((seconds / 60 / 60) % 24).toString();
  let mins = Math.floor((seconds / 60) % 60).toString();
  let sec = Math.floor(seconds % 60).toString();
  timerEl.innerHTML = `${hours.padStart(2, "0")}:${mins.padStart(
    2,
    "0"
  )}:${sec.padStart(2, "0")}`;
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^\d.]/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
