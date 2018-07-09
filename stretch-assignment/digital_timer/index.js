let digits = document.querySelectorAll(".digits .digit");
let msTens = document.getElementById("msTens");
let msHundreds = document.getElementById("msHundreds");
let ones = document.getElementById("secondOnes");
let tens = document.getElementById("secondTens");
let msTensCount = 0;
let msHundredsCount = 0;
tens.innerHTML = 0;
ones.innerHTML = 0;
msHundreds.innerHTML = 0;
msTens.innerHTML = 0;

function increment() {
  msTensCount = msTensCount + 1;
  if (msTens.innerHTML <= 8) {
    msTens.innerHTML = msTensCount;
  }
  // } else {
  //   msTens.innerHTML = 0;
  //   msHundreds.innerHTML 
  // }
  console.log(`time: ${time} msTens: ${msTens.innerHTML}`);
}
setInterval(increment, 10);