const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");

function startTimer() {
  const msTensInterval = window.setInterval(function() {
    if (this.msTens.innerText === "9") {
      this.msTens.innerText = 0;
    } else {
      this.msTens.innerText = (Number(this.msTens.innerText) || 0) + 1;
    }
  }, 20);

  const msHundredsInterval = window.setInterval(function() {
    if (this.msHundreds.innerText === "9") {
      this.msHundreds.innerText = 0;
    } else {
      this.msHundreds.innerText = (Number(this.msHundreds.innerText) || 0) + 1;
    }
  }, 100);

  const secondOnesInterval = window.setInterval(function() {
    if (this.secondOnes.innerText === "9") {
      this.secondOnes.innerText = 0;
    } else {
      this.secondOnes.innerText = (Number(this.secondOnes.innerText) || 0) + 1;
    }
  }, 1000);

  resetButton.disabled = true;

  window.setTimeout(function() {
    clearInterval(msTensInterval);
    clearInterval(msHundredsInterval);
    clearInterval(secondOnesInterval);
    this.secondTens.innerText = 1;
    let makeDigitRed = document.querySelectorAll(".digit");
    for (let i = 0; i < makeDigitRed.length; i++) {
      makeDigitRed[i].classList.add("redDigit");
    }
    resetButton.disabled = false;
  }, 10000);
}

const body = document.getElementsByTagName("body")[0];

const buttonsDiv = document.createElement("div");
buttonsDiv.style.marginTop = "20px";

body.appendChild(buttonsDiv);

const startButton = document.createElement("button");
startButton.innerText = "Start";
startButton.addEventListener("click", function() {
  startButton.disabled = true;
  return startTimer();
});

buttonsDiv.appendChild(startButton);

const resetButton = document.createElement("button");
resetButton.innerText = "Reset";
resetButton.addEventListener("click", function() {
  msTens.innerText = 0;
  msHundreds.innerText = 0;
  secondOnes.innerText = 0;
  secondTens.innerText = 0;
  let resetDigitColor = document.querySelectorAll(".digit");
  for (let i = 0; i < resetDigitColor.length; i++) {
    resetDigitColor[i].classList.remove("redDigit");
  }
  startButton.disabled = false;
  resetButton.disabled = true;
  return resetTimer();
});

buttonsDiv.appendChild(resetButton);

startButton.style.padding = "10px 20px";
resetButton.style.padding = "10px 20px";
startButton.style.border = "2px solid #1A5276";
resetButton.style.border = "2px solid #1A5276";
startButton.style.backgroundColor = "#2ECC71";
resetButton.style.backgroundColor = "#2ECC71";
resetButton.style.marginLeft = "10px";
body.style.display = "flex";
body.style.flexDirection = "column";
