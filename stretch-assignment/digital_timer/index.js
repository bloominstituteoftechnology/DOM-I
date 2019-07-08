const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");

let timer = window.setInterval(callback, 1000);
let timers = window.setInterval(callbacks, 10);
let counter = 0;
let counters = 0;

function callback() {
  if (counter < 10) counter++;
  document.getElementById("secondOnes").innerHTML = counter;
  console.log(counter);
}

function callbacks() {
  counters++;
  document.getElementById("msHundreds").innerHTML = counters;
  document.getElementById("msTens").innerHTML = counters;
  console.log(counters);
}
