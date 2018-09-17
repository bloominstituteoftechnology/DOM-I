// You will be making a timer that:
// * Counts up to 10 seconds
// * Increments every 10 ms
// * Has digits change to red when it gets to 10 seconds
// * Should not count past 10 seconds
let digit = document.querySelector(".digits");
let msTens = document.querySelector("#msTens");
let msHundreds = document.querySelector("#msHundreds");
let secondOnes = document.querySelector("#secondOnes");
let secondTens = document.querySelector("#secondTens");
let startTime = 0;
let msOnesCounter = 0;
let msHundredsCounter = 0;
let secondOnesCounter = 0;
let secondTensCounter = 0;
let timer = setInterval(addTime, 10);
let refresh = function() {
  msOnesCounter = 0;
};

// init();

//  buttons
let startBtn = document.querySelector("#start");
startBtn.addEventListener("click", () => (startTime = 10));
// start

// pause button (temporary)
let stopBtn = document.querySelector("#stop");
stopBtn.addEventListener("click", () => clearInterval(timer));

msTens.textContent = msOnesCounter;
msHundreds.textContent = msHundredsCounter;
secondOnes.textContent = secondOnesCounter;
secondTens.textContent = secondTensCounter;

function init() {
  msOnesCounter = 0;
  msHundredsCounter = 0;
  secondOnesCounter = 0;
  secondTensCounter = 0;
}

function addTime() {
  if (msOnesCounter < 9) {
    ++msOnesCounter;
  } else if (msOnesCounter > 8) {
    msHundredsCounter++;
    // console.log(msHundredsCounter);
    refresh();
    addSecond();
  }

  msTens.innerText = msOnesCounter;
  msHundreds.innerText = msHundredsCounter;
  secondOnes.textContent = secondOnesCounter;
  secondTens.textContent = secondTensCounter;
}

function addSecond() {
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
    digit.classList.add("redDigit");
  }
}
