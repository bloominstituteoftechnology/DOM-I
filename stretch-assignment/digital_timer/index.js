let digits = document.querySelectorAll(".digits .digit");
let msTens = document.getElementById("msTens");
let msHundreds = document.getElementById("msHundreds");
let ones = document.getElementById("secondOnes");
let tens = document.getElementById("secondTens");
let msTensCount = 0;
let msHundredsCount = 0;
let onesCount = 0;
let tensCount = 0;

function increment() {
  if (tensCount === 1) {
    clearInterval(timer);
    [].forEach.call(digits, function(digit) {
      digit.style.color = "red";
    })
    
  } else {
    if (msTensCount <= 8) {
      msTensCount += 1;
    } else if (msHundredsCount <= 8) {
      msTensCount = 0;
      msHundredsCount += 1;
    } else if (onesCount <= 8) {
      msTensCount = 0;
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
}
let timer = setInterval(increment, 10);
