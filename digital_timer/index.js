
document.getElementById("secondTens").innerHTML = "0";
document.getElementById("secondOnes").innerHTML = "0";
document.getElementById("msHundreds").innerHTML = "0";
document.getElementById("msTens").innerHTML = "0";

let secondTensLabel = document.getElementById("secondTens");
let secondOnesLabel = document.getElementById("secondOnes");
let msHundredsLabel = document.getElementById("msHundreds");
let msTensLabel = document.getElementById("msTens");

let totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondTensLabel.innerHTML = pad(totalSeconds % 60);
  secondOnesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}