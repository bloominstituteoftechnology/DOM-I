// declare variables

const secondOnes = document.getElementById('secondOnes');
const secondTens = document.getElementById('secondTens');
const msTens = document.getElementById('msTens');
const msHundreds = document.getElementById('msHundreds');

function timer() {
  let time = 0;

  function increment() {
    time += 1
   // console.log(time);
    return time;
  }
  return increment;
}

let newTimer = timer();
let interval = setInterval(function(){
  currentTime = newTimer();
  if (currentTime >= 1000) {
    document.body.style.color = 'red';
    clearInterval(interval);
  }
  displayTime = currentTime.toString();
  //console.log(displayTime);
  msTens.innerText = displayTime[displayTime.length -1];
  msHundreds.innerText = displayTime[displayTime.length -2] || 0;
  secondOnes.innerText = displayTime[displayTime.length -3] || 0;
  secondTens.innerText = displayTime[displayTime.length -4] || 0;
}, 10);



