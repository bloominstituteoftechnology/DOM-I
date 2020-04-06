//Select and Initialize variables
let colon = document.querySelector("#colon");
//second tenth place

let secondTensDiv = document.querySelector("#secondTens");

secondTensDiv.textContent = 0;
//Second Oneth place
let secondOnesDiv = document.querySelector("#secondOnes");
secondOnesDiv.textContent = 0;
//ms100s
let msHundredsDiv = document.querySelector("#msHundreds");
msHundredsDiv.textContent = 0;

let msTensDiv = document.querySelector("#msTens");
msTensDiv.textContent = 0;
let seconds = 0;

window.setInterval(function () {
  seconds++;
}, 10);

window.setInterval(UpdatemsTens, 10);
window.setInterval(UpdatemsHundreds, 100);
window.setInterval(UpdatesOnes, 1000);

function UpdatemsTens() {
  if (parseInt(msTensDiv.textContent) >= 9 || seconds >= 1000) {
    msTensDiv.textContent = 0;
  } else {
    msTensDiv.textContent = parseInt(msTensDiv.textContent) + 1;
  }
}

function UpdatemsHundreds() {
  if (parseInt(msHundredsDiv.textContent) >= 9 || seconds >= 1000) {
    msHundredsDiv.textContent = 0;
  } else {
    msHundredsDiv.textContent = parseInt(msHundredsDiv.textContent) + 1;
  }
}

function UpdatesOnes() {
  if (parseInt(secondOnesDiv.textContent) >= 9 || seconds >= 1000) {
    secondOnesDiv.textContent = 0;
    secondTensDiv.textContent = 1;

    secondOnesDiv.style.color = "red";
    secondTensDiv.style.color = "red";
    msHundredsDiv.style.color = "red";
    msTensDiv.style.color = "red";
    colon.style.color = "red";
  } else {
    secondOnesDiv.textContent = parseInt(secondOnesDiv.textContent) + 1;
  }
}
