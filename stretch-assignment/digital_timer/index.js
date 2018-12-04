
function startTimer () {
  let count = 0;
  const stop = 100 * 1; // ms/s * s -- set stop time
  const delay = window.setInterval(() => {
    const msTens = count % 10;
    const msHundreds = Math.floor(count / 10) % 10;
    const secondOnes = Math.floor(count / 100) % 10;
    const secondTens = Math.floor(count / 1000) % 10;
    setDigits (msTens, msHundreds, secondOnes, secondTens);
    if (count < stop) {
      count ++;
    } else if (stop === true) {
      window.clearInterval(delay);
    } else {
      const digits = document.querySelectorAll(".digits");
      window.clearInterval(delay);
      digits[0].childNodes.forEach(child => {
        child.className = "digit redDigit";
      });
    }
  }, 10); // execute every 10 ms
}

function stopTimer () {
  
}

function resetTimer () {
  setDigits ("-", "-", "-", "-");
}


function setDigits (msTens, msHundreds, secondOnes, secondTens) {
  const digits = document.querySelectorAll(".digits");
  digits[0].childNodes.forEach(element => {
    if (element.id === "msTens") {
      element.textContent = msTens;
    } else if (element.id === "msHundreds") {
      element.textContent = msHundreds;
    } else if (element.id === "secondOnes") {
      element.textContent = secondOnes;
    } else if (element.id === "secondTens") {
      element.textContent = secondTens;
    }
  });
}

const startButton = document.querySelector("#startButton");
startButton.addEventListener("click", startTimer);
const stopButton = document.querySelector("#stopButton");
stopButton.addEventListener("click", stopTimer);
const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", resetTimer);
