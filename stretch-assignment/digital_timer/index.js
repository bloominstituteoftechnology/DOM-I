let digits = document.querySelectorAll(".digits .digit");
let msTens = document.getElementById("msTens");
let msHundreds = document.getElementById("msHundreds");
let ones = document.getElementById("secondOnes");
let tens = document.getElementById("secondTens");
let msTensCount = 0;
let msHundredsCount = 0;
let onesCount = 0;
let tensCount = 0;
// tens.innerHTML = 0;
// ones.innerHTML = 0;
// msHundreds.innerHTML = 0;
// msTens.innerHTML = 0;

function increment() {
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
    clearInterval;
    // digits.style.color = "red";
  }

  msTens.innerHTML = msTensCount;
  msHundreds.innerHTML = msHundredsCount;
  ones.innerHTML = onesCount;
  tens.innerHTML = tensCount;
  console.log(`msTensCount: ${msTensCount} msTens: ${msTens.innerHTML}`);
}
setInterval(increment, 10);