const go = document.querySelector('#go');
const digits = Array.from(document.querySelectorAll('.digit'))
  .filter(digit => digit.id !== 'colon')
  .reverse();

let count = 0;
const maxCount = 1000;
let timer;

const time = () => {
  go.disabled = true;

  timer = window.setInterval(() => {
    if (count >= maxCount) {
      setDigitClass('redDigit');
      clearInterval(timer);
    }
    updateTimer(count++);
  }, 10);
};

const reset = () => {
  clearInterval(timer);
  count = 0;
  updateTimer(count);
  setDigitClass('');
  go.disabled = false;
};

const updateTimer = time =>
  digits.forEach(
    (digit, index) => (digit.textContent = Math.floor(time / Math.pow(10, index)) % 10)
  );

const setDigitClass = className =>
  Array.from(document.querySelectorAll('.digit')).forEach(
    digit => (digit.className = `digit ${className}`)
  );
