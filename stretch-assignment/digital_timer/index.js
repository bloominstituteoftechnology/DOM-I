const main = document.querySelector("main");
const header = document.createElement("h1");
header.textContent = "The Final Countdown";
main.prepend(header);
const button = document.querySelector("input");
const msTens = document.querySelector("#msTens");
const msHundreds = document.querySelector("#msHundreds");
const secOnes = document.querySelector("#secondOnes");
const secTens = document.querySelector("#secondTens");
const semicolon = document.querySelector("#colon");

let timerGoing = false;

function start() {}

function pause() {}

button.addEventListener("click", () => {
  if (timerGoing === false) {
    start();
  } else if (timerGoing === true) {
    pause();
  } else {
    alert("Something went wrong.");
  }
});
