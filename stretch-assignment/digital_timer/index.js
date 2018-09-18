const sTen = document.querySelector("#secondTens");
const sOne = document.querySelector("#secondOnes");
const msHun = document.querySelector("#msHundreds");
const msTen = document.querySelector("#msTens");
const allDigits = document.querySelector("#digits");
sTen.style.display = "none";
msTen.style.display = "none";
var totalSeconds = 0;
setInterval(setTime, 10);

function setTime() {
  ++totalSeconds;
  msHun.innerHTML = increment(totalSeconds % 60);
  sOne.innerHTML = increment(parseInt(totalSeconds / 60));
  if (sOne.innerHTML >= 10) {
    clearTimeout(setTime);
    msHun.innerHTML = 0;
    msTen.style.display = "initial";
    msTen.innerHTML = 0;
    sOne.innerHTML = 10;
    msHun.style.color = "red";
    msTen.style.color = "red";
    sOne.style.color = "red";
  }
}

function increment(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
