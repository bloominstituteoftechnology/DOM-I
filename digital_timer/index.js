var timer = 0;
var timerInterval;
var ms = document.getElementById('ms');
var second = document.getElementById('second');
const digits = document.getElementsByClassName("digits");
const classText = digits[0];


timerInterval = setInterval(setTime, 1000/60);
function setTime() {
  timer += 1/60;
  msVal = Math.floor((timer - Math.floor(timer))*100);
  secondVal = Math.floor(timer) - Math.floor(timer/60) * 60;
  ms.innerHTML = msVal < 10 ? "0" + msVal.toString() : msVal;
  second.innerHTML = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
  
 if (secondVal >= 10) {
    clearInterval(timerInterval);
    classText.classList.add('redDigit');
 }
}
