const button = document.querySelector("button");
const buttonT = document.querySelector("#buttonT");

const msTens = document.querySelector("#msTens");
const msHundreds = document.querySelector("#msHundreds");
const secondOnes = document.querySelector("#secondOnes");
const secondTens = document.querySelector("#secondTens");

function myTimer() {
  let keepG = true;
  let count = 0;
  let countM = 0;
  let countH = 0;
  let countS = 0;
  let countT = 0;
  let timer = null;
  msHundreds.textContent = countH;
  secondOnes.textContent = countS;
  secondTens.textContent = countT;
  msTens.textContent = countM;
  document
    .querySelectorAll(".digit")
    .forEach((elem) => (elem.style.color = "black"));
  button.disabled = true;
  timer = setInterval(function () {
    if (keepG) {
      count++;
      countM++;
      if (countM === 10) {
        countH++;
        countM = 0;
        msTens.textContent = count;
        msHundreds.textContent = countH;
      }
      if (countH === 10) {
        countS++;
        countH = 0;
        msHundreds.textContent = countH;
        secondOnes.textContent = countS;
      }
      if (countS === 10) {
        countT++;
        countS = 0;
        document
          .querySelectorAll(".digit")
          .forEach((elem) => (elem.style.color = "red"));
        secondOnes.textContent = countS;
        secondTens.textContent = countT;
        keepG = false;
      }
      msTens.textContent = countM;
    } else {
      clearInterval(timer);
      button.disabled = false;
    }
  }, 20);
}

function reset() {
  let count = 0;
  let countM = 0;
  let countH = 0;
  let countS = 0;
  let countT = 0;
  let timer = null;
  msHundreds.textContent = countH;
  secondOnes.textContent = countS;
  secondTens.textContent = countT;
  msTens.textContent = countM;
  document
    .querySelectorAll(".digit")
    .forEach((elem) => (elem.style.color = "black"));
}

button.onclick = myTimer;
buttonT.onclick = reset;
