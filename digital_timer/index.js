// GlobalVariables
const startButton = document.getElementsByClassName("start")[0];
const stopButton = document.getElementsByClassName("stop")[0];
let oneMilli = document.getElementById("msHundredths");
let tenMilli = document.getElementById('msTens');
let secondOnes = document.getElementById('secondOnes');
let secondTens = document.getElementById('secondTens');
let Timer;

//functions
function initializeTimer() {
  oneMilli.innerHTML = 0;
  tenMilli.innerHTML = 0;
  secondOnes.innerHTML = 0;
  secondTens.innerHTML = 0;
}
function updateColor(arr, color) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].innerText !== ":") {
      arr[i].style.color = color;
    }
  }
}
function startTimer() {
  initializeTimer();
  Timer = window.setInterval(function() {
    if(parseInt(oneMilli.innerText) > 8) {
      oneMilli.innerHTML = 0;
      tenMilli.innerHTML = parseInt(tenMilli.innerText) + 1;
      if(parseInt(tenMilli.innerText) > 8) {
        tenMilli.innerHTML = 0;
        secondOnes.innerHTML = parseInt(secondOnes.innerText) + 1;
        if(parseInt(secondOnes.innerText) > 8) {
          secondOnes.innerHTML = 0;
          secondTens.innerHTML = parseInt(secondTens.innerText) + 1;
          stopTimer();
          updateColor(document.getElementsByClassName('digit'), 'red');
          return;
        }
      }
    }
    oneMilli.innerHTML = parseInt(oneMilli.innerText) + 1;
  }, 10);
}

function stopTimer() {
  clearInterval(Timer);
}

// DOM
window.onload = function() {
  window.addEventListener("click", function(event) {
    if (event.target.nodeName === "BUTTON") {
      if (event.target.classList.value === "start") {
        updateColor(document.getElementsByClassName('digit'), 'black');
        stopTimer();
        startTimer();
      } else {
        stopTimer();
      }
    }
  });
};
