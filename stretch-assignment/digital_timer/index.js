// stretch task digital timer

const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");
let seconds = 0;
let miliSeconds = 0;
let timer = setInterval(counter, 10);
let isPaused = false;

// init counter while isPaused is false
function counter() {
  if (!isPaused) {
    seconds++;
    miliSeconds++;
    secondTens.style.display = "none";
    secondOnes.innerHTML = Math.floor(seconds / 100) + "s";
    msTens.innerHTML = Math.floor(miliSeconds * 1);
  }

  if (miliSeconds >= 99) {
    miliSeconds = 0;
  }
  if (seconds >= 1000) {
    isPaused = true;
    pause.style.display = "none";
    play.style.display = "inline";
    miliSeconds = 0;
    seconds = 0;
    msTens.innerHTML = "0";
  }
}

// play timer
const play = document.getElementById("play");
play.addEventListener("click", playTimer);

function playTimer() {
  isPaused = false;
  pause.style.display = "inline";
  play.style.display = "none";
}

// pause timer
const pause = document.getElementById("pause");
pause.addEventListener("click", pauseTimer);

function pauseTimer() {
  isPaused = true;
  pause.style.display = "none";
  play.style.display = "inline";
}

// reset timer
const reset = document.querySelector(".play-pause span");
reset.addEventListener("click", resetCounter);

function resetCounter() {
  seconds = 0;
  miliSeconds = 0;
  secondOnes.innerHTML = 0 + "s";
  msTens.innerHTML = 0;
  isPaused = true;
  play.style.display = "inline";
  pause.style.display = "none";
}
