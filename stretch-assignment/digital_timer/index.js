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
let msOnesCounter = 0;
let msHundredsCounter = 0;
let secondOnesCounter = 0;
let secondTensCounter = 0;
let timer = setInterval(addTime, 10);
let refresh = function() {
  msOnesCounter = 0;
};

init();

//  buttons
let button = document.querySelector("button");
// start

// pause button (temporary)
button.addEventListener("click", () => clearInterval(timer));

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
  } else if (msHundredsCounter > 8) {
    msHundredsCounter = 0;
    console.log(msHundredsCounter);
    secondOnesCounter++;
  }

  msTens.innerText = msOnesCounter;
  msHundreds.innerText = msHundredsCounter;
  secondOnes.textContent = secondOnesCounter;
  secondTens.textContent = secondTensCounter;
}
