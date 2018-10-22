const digits = Array.from(document.querySelectorAll('.digits .digit'));
const colon = digits.splice(2, 1)[0];
digits.forEach(digit => digit.textContent = 0);
const [ secondTens, secondOnes, msHundreds, msTens ] = digits;
const updateTimer = () => {
  if (Number(secondTens.textContent) < 1) {
    msTens.textContent = Number(msTens.textContent) + 1;
    if (msTens.textContent > 8) {
      msHundreds.textContent = Number(msHundreds.textContent) + 1;
      msTens.textContent = 0;
      if (msHundreds.textContent > 9) {
        secondOnes.textContent = Number(secondOnes.textContent) + 1;
        msHundreds.textContent = 0;

        if (secondOnes.textContent > 9) {
          secondTens.textContent = 1;
          secondOnes.textContent = 0;
        }
      }
    }
  } else {
    clearInterval(intervalID);
    digits.forEach(digit => digit.style.color = 'red');
    colon.style.color = 'red';
  }
};

let intervalID = window.setInterval(updateTimer, 10);
