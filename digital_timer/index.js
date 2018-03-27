// GlobalVariables
const startButton = document.getElementsByClassName("start")[0];
const stopButton = document.getElementsByClassName("stop")[0];
let oneMilli = document.getElementById("msHundredths");
let tenMilli = document.getElementById('msTens');
let secondOnes = document.getElementById('secondOnes');
let secondTens = document.getElementById('secondTens');
let Timer;
//const element = document.querySelectorAll('.digitcontainer').style.color = "red"
//functions
function initializeTimer() {
  oneMilli.innerHTML = 0;
  tenMilli.innerHTML = 0;
  secondOnes.innerHTML = 0;
  secondTens.innerHTML = 0;
}

function startTimer() {
  initializeTimer();
  Timer = window.setInterval(function() {
    if(parseInt(oneMilli.innerText) > 9) {
      oneMilli.innerHTML = 0;
      tenMilli.innerHTML = parseInt(tenMilli.innerText) + 1;
      if(parseInt(tenMilli.innerText) > 9) {
        tenMilli.innerHTML = 0;
        secondOnes.innerHTML = parseInt(secondOnes.innerText) + 1;
        if(parseInt(secondOnes.innerText) > 9) {
          secondOnes.innerHTML = 0;
          secondTens.innerHTML = parseInt(secondTens.innerText) + 1;
  
        
          return stopTimer();
        }
      }
    }
    oneMilli.innerHTML = parseInt(oneMilli.innerText) + 1;
  }, 10);
}

function stopTimer() {
  clearInterval(Timer);
}
function changeDigitColor() {
    var digitList = document.querySelectorAll(".digitContainer");
    for (let i = 0; i < array.length; i++) {
        if(digitList !== digitlist[2]){
digitList.style.color = "red"
        }
        
    }
}


// DOM
window.onload = function() {
  window.addEventListener("click", function(event) {
    if (event.target.nodeName === "BUTTON") {
      if (event.target.classList.value === "start") {
        stopTimer();
        startTimer();
      } else {
        stopTimer();
      }
    }
  });
};