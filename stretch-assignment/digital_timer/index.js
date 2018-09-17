const sTen = document.querySelector("#secondTens");
const sOne = document.querySelector("#secondOnes");
const msHun = document.querySelector("#msHundreds");
const msTen = document.querySelector("#msTens");
const allDigits = document.querySelectorAll("#digit");

function counter() {
  let num = 0;
  function goUp() {
    num++;
    return num;
  }
  return goUp;
}
let newCounter = counter();

var sOneCount = setInterval(sOneTimer, 1000);
function sOneTimer() {
  sTen.innerHTML = 0;
  var sOneTime = newCounter();
  sOne.innerHTML = sOneTime;
  if (sOneTime === 10) {
    clearTimeout(sOneCount);
    sTen.style.display = "none";
    sOne.style.color = "red";
  }
}
