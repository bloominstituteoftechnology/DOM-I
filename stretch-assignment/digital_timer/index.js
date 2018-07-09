let digits = document.querySelectorAll(".digits .digit");
let msTens = document.getElementById("msTens");
let msHundreds = document.getElementById("msHundreds");
let ones = document.getElementById("secondOnes");
let tens = document.getElementById("secondTens");
let msTensCount = 0;
let msHundredsCount = 0;
let onesCount = 0;
let tensCount = 0;
let body = document.querySelector("body");
let startBtn = document.createElement('button');
startBtn.appendChild(document.createTextNode("Start"));
body.appendChild(startBtn)

startBtn.addEventListener("click", timer);

function increment() {
  if (tensCount === 1) {
    clearInterval(timer);
    [].forEach.call(digits, function(digit) {
      digit.style.color = "red";
      startBtn.disabled = false;
    })
    
  } else {
    if (msTensCount <= 8) {
      msTensCount += 1;
    } else if (msHundredsCount <= 8) {
      msTensCount = 0;
      msHundredsCount += 1;
    } else if (onesCount <= 8) {
      msHundredsCount = 0;
      onesCount += 1;
    } else {
      msTensCount = 0;
      msHundredsCount = 0;
      onesCount = 0;
      tensCount = 1;
    }

    msTens.innerHTML = msTensCount;
    msHundreds.innerHTML = msHundredsCount;
    ones.innerHTML = onesCount;
    tens.innerHTML = tensCount;
  }
};

function timer() {
  startBtn.disabled = true;
  setInterval(increment, 10);
} 
