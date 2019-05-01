const digits = document.querySelector(".digits");
const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");
const msOnes = document.getElementById("msOnes");

const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');


btnStart.addEventListener('click', () => {
  timer();
});

function timer() {
  init();

  function init() {
    let ms = 0;
    secondTens.innerHTML = "0";
    secondOnes.innerHTML = "0";
    msHundreds.innerHTML = "0";
    msTens.innerHTML = "0";

    const timerInterval = window.setInterval(() => {
      ms += 10;
      if (ms === 10000) {
        endTimer(timerInterval);
      }

      btnStop.addEventListener('click', () => {
        window.clearInterval(timerInterval);
      });

      updateTimer(ms);
    }, 10);
  }


  function increment(string) {
    let number = Number(string) + 1;
    return number.toString();
  }


  function endTimer(intervalId) {
    clearInterval(intervalId);
    Array.from(digits.children).forEach(digit => {
      digit.classList.add("redDigit");
    })
  }


  function updateTimer(ms) {
    if (ms === 10000) {
      secondTens.innerHTML = "1";
      secondOnes.innerHTML = "0";
      msHundreds.innerHTML = "0";
      msTens.innerHTML = "0";
    } else if (ms % 1000 === 0) {
      secondOnes.innerHTML = increment(secondOnes.innerHTML);
      msHundreds.innerHTML = "0";
      msTens.innerHTML = "0";
    } else if (ms % 100 === 0) {
      msHundreds.innerHTML = increment(msHundreds.innerHTML);
      msTens.innerHTML = "0";
    } else {
      msTens.innerHTML = increment(msTens.innerHTML);
    }
  }

}