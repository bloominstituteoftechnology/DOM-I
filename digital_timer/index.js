// function updateTime() {
//     var time = 0;
//     setInterval(function() {
//         document.querySelector(".digits").value = time;
//         time++;
//         if (time > 10) {
//             time = 1;
//         }
//     }, 10);
// }
// updateTime();


// let num = window.setInterval( function() {
//     console.log('Look at this');
// }, 1000);


//
// GlobalVariables
const startButton = document.getElementsByClassName("start")[0];
const stopButton = document.getElementsByClassName("stop")[0];
let oneMilli = document.getElementById("msHundredths");
let tenMilli = document.getElementById('msTens');

let Timer;

// functions
function startTimer() {
  oneMilli.innerHTML = 0;
  Timer = window.setInterval(function() {
    if(parseInt(oneMilli.innerText) > 8) {
        if (oneMilli.innerText > 8){
            oneMilli.innerText = 0;
        }
       return stopTimer();
    }
    oneMilli.innerHTML = parseInt(oneMilli.innerText) + 1;
  }, 1000);
}

function stopTimer() {
  clearInterval(Timer);
  console.log("timer stopped!");
}

// DOM
window.onload = function() {
  window.addEventListener("click", function(event) {
    if (event.target.nodeName === "BUTTON") {
      if (event.target.classList.value === "start") {
        startTimer();
      } else {
        stopTimer();
      }
    }
  });
};