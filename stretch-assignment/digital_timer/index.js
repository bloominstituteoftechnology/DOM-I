const main = document.querySelector("main");
const header = document.createElement("h1");
header.textContent = "The Final Countup";
main.prepend(header);
const button = document.querySelector("input");
let msTens = document.querySelector("#msTens");
let msHundreds = document.querySelector("#msHundreds");
let secOnes = document.querySelector("#secondOnes");
let secTens = document.querySelector("#secondTens");
let semicolon = document.querySelector("#colon");
let timerGoing = false;
let timer;

function updateSecTens() {
  secTens.textContent = parseInt(secTens.textContent) + 1;
  timer = clearInterval(timer);
  timerGoing = false;
}

function updateSecOnes() {
  if (secOnes.textContent === "9") {
    secOnes.textContent = 0;
    updateSecTens();
  } else {
    secOnes.textContent = parseInt(secOnes.textContent) + 1;
  }
}

function updateMSHundreds() {
  if (msHundreds.textContent === "9") {
    msHundreds.textContent = 0;
    updateSecOnes();
  } else {
    msHundreds.textContent = parseInt(msHundreds.textContent) + 1;
  }
}

function updateMSTens() {
  if (msTens.textContent === "9") {
    msTens.textContent = 0;
    updateMSHundreds();
  } else {
    msTens.textContent = parseInt(msTens.textContent) + 1;
  }
}

function start() {
  if (timerGoing === false) {
    timerGoing = true;
    timer = setInterval(updateMSTens, 10);
    button.textContent = "Pause";
  } else {
    timer = clearInterval(timer);
    button.textContent = "Start";
    timerGoing = false;
  }
}

function restart() {
  timerGoing = false;
  timer = 0;
  secTens = 1;
  secOnes = 0;
  msTens = 0;
  msHundreds = 0;
}

button.addEventListener("click", () => {
  if (timerGoing === false) {
    start();
  } else if (timerGoing === true) {
    restart();
    console.log("!");
  } else {
    alert("Something went wrong.");
  }
});
