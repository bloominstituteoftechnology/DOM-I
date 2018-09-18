// ==================== DIGITAL TIMER =====================

// You will be making a timer that:
// * Counts up to 10 seconds
// * Increments every 10 ms
// * Has digits change to red when it gets to 10 seconds
// * Should not count past 10 seconds
let digits = document.querySelector(".digits");
let msTens = document.querySelector("#msTens");
let msHundreds = document.querySelector("#msHundreds");
let secondOnes = document.querySelector("#secondOnes");
let secondTens = document.querySelector("#secondTens");
let msOnesCounter = 0;
let msHundredsCounter = 0;
let secondOnesCounter = 0;
let secondTensCounter = 0;
let timer;

msTens.textContent = msOnesCounter;
msHundreds.textContent = msHundredsCounter;
secondOnes.textContent = secondOnesCounter;
secondTens.textContent = secondTensCounter;

function init() {
  digits.style.color = "white";
  msOnesCounter = 0;
  msHundredsCounter = 0;
  secondOnesCounter = 0;
  secondTensCounter = 0;
  msTens.textContent = 0;
  msHundreds.textContent = 0;
  secondOnes.textContent = 0;
  secondTens.textContent = 0;
  body.style.color = "white";
}

function addTime() {
  if (msOnesCounter <= 10) {
    msOnesCounter++;
  }

  if (msOnesCounter > 9) {
    msOnesCounter = 0;
    msHundredsCounter++;
  }

  if (msHundredsCounter > 9) {
    msHundredsCounter = 0;
    secondOnesCounter++;
    console.log(secondOnesCounter);
  }

  if (secondOnesCounter > 9) {
    secondOnesCounter = 0;
    secondTensCounter++;
  }

  if (secondTensCounter > 0) {
    clearInterval(timer);
    digits.classList.add("redDigit");
  }

  msTens.innerText = msOnesCounter;
  msHundreds.innerText = msHundredsCounter;
  secondOnes.textContent = secondOnesCounter;
  secondTens.textContent = secondTensCounter;
}

// ==================== BUTTONS ===================== //
let buttonClass = document.querySelectorAll("button");
buttonClass.forEach(function(button) {
  button.style.border = "none";
  button.style.color = "white";
  button.style.fontSize = "35px";
  button.style.fontFamily = "Helvetica";
  button.style.minWidth = "150px";
  button.style.padding = "10px 20px";
  button.style.cursor = "pointer";
});

// START
let startBtn = document.querySelector("#start");
startBtn.addEventListener("click", () => (timer = setInterval(addTime, 10)));
startBtn.style.backgroundColor = "green";

// STOP
let stopBtn = document.querySelector("#stop");
stopBtn.addEventListener("click", () => clearInterval(timer));
stopBtn.style.backgroundColor = "red";

// RESET
let resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => init());
resetBtn.style.backgroundColor = "orange";

// ==================== STYLING ===================== //

let body = document.querySelector("body");
body.style.backgroundColor = "#333";
body.style.color = "white";
body.style.flexDirection = "column";

let head = document.querySelector("head");
let linkTag = document.createElement("link");
let googleFont = head.appendChild(linkTag);
linkTag.href = "https://fonts.googleapis.com/css?family=VT323";
linkTag.rel = "stylesheet";

body.style.fontFamily = "'VT323', monospace";

let digit = document.querySelectorAll(".digit");
digit.forEach(digit => (digit.style.fontSize = "200px"));
digits.style.marginTop = "200px";
