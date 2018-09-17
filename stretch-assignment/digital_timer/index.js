const sTen = document.querySelector("#secondTens");
const sOne = document.querySelector("#secondOnes");
const msHun = document.querySelector("#msHundreds");
const msTen = document.querySelector("#msTens");

function counter() {
  let num = 0;
  function goUp() {
    num++;
    return num;
  }
  return goUp;
}
let newCounter = counter();

var sTenCount = setInterval(sTenTimer, 1000);
var sOneCount = setInterval(sOneTimer, 1000);
function sOneTimer() {
  var sOneTime = newCounter();
  sOne.innerHTML = sOneTime;
  if (sOneTime === 10) {
    clearTimeout(sOneCount);
    sOne.innerHTML = 0;
  }
}

function sTenTimer() {
  var sTenTime = newCounter();
  sTen.innerHTML = sTenTime;
  if (sTenTime === 10) {
    clearTimeout(sTenCount);
    sTenCount.innerHTML = 1;
  }
}
