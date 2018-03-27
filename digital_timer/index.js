var tenSecondsLabel = document.getElementById("msHundreds");
var secondsLabel = document.getElementById("msTens");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 10);
  tenSecondsLabel.innerHTML = pad(parseInt(totalSeconds / 10));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 1) {
    return "0" + valString;
  } else {
    return valString;
  }
}

function endTime(intervalId) {
    clearInterval(intervalId);
} 