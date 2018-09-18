// <!DOCTYPE html>
// <html>
//   <head>
//     <title>DOM I</title>
//     <link rel="stylesheet" href="./styles.css">
//   </head>
//   <body>
//     <div class="digits">
//       <div class="digit" id="secondTens">-</div>
//       <div class="digit" id="secondOnes">-</div>
//       <div class="digit" id="colon">:</div>
//       <div class="digit" id="msHundreds">-</div>
//       <div class="digit" id="msTens">-</div>
//     </div>
//     <script src="index.js"></script>
//   </body>
// </html>

// get DOM elements
let digits = document.querySelector(".digits");
let digit = document.querySelectorAll(".digit");
// [0]=secondTens [1]=secondOnes [3]=msHundreds [4]=msTens

// append a start/stop button
let startButton = document.createElement("button");
startButton.innerText = "Start";
digits.append(startButton);
let stopButton = document.createElement("button");
stopButton.innerText = "Stop";
digits.append(stopButton);

let msTens = 0;
let msHundreds = 0;
let secondOnes = 0;
let secondTens = 0;
// run timer
let timerIsRunning = false;
let timerStopped = true;
function runTimer() {
  timerIsRunning = true;
  timerStoped = false;

  if (
    digit[0].innerText !== "-" ||
    digit[1].innerText !== "-" ||
    digit[3].innerText !== "-" ||
    digit[4].innerText !== "-"
  ) {
    digit[0].innerText = "-";
    digit[1].innerText = "-";
    digit[3].innerText = "-";
    digit[4].innerText = "-";
    msTens = 0;
    msHundreds = 0;
    secondOnes = 0;
    secondTens = 0;
  }
  digit[0].innerText = "-";
  for (let i = 0; i < digit.length; i++) {
    digit[i].classList.remove("redDigit");
  }
  const msTensInterval = setInterval(() => {
    digit[4].innerText = msTens;
    msTens += 1;
    if (msTens > 9) {
      msTens = 0;
    }
  }, 10);
  const msHundredsInterval = setInterval(() => {
    digit[3].innerText = msHundreds;
    msHundreds += 1;
    if (msHundreds > 9) {
      msHundreds = 0;
    }
  }, 100);
  const secondOnesInterval = setInterval(() => {
    secondOnes += 1;
    digit[1].innerText = secondOnes;
    if (secondOnes > 9) {
      secondOnes = 0;
    }
  }, 1000);
  const secondTensInterval = setInterval(() => {
    secondTens = 1;
    digit[0].innerText = secondTens;
    clearInterval(msTensInterval);
    clearInterval(msHundredsInterval);
    clearInterval(secondOnesInterval);
    clearInterval(secondTensInterval);
    digit[0].innerText = "1";
    digit[1].innerText = "0";
    digit[3].innerText = "0";
    digit[4].innerText = "0";
    for (let i = 0; i < digit.length; i++) {
      digit[i].classList.add("redDigit");
    }
    timerStopped = true;
    timerIsRunning = false;
  }, 10000);

  // stop timer
  stopButton.addEventListener("click", () => {
    clearInterval(msTensInterval);
    clearInterval(msHundredsInterval);
    clearInterval(secondOnesInterval);
    clearInterval(secondTensInterval);
    timerIsRunning = false;
    timerStopped = true;
    for (let i = 0; i < digit.length; i++) {
      digit[i].classList.add("redDigit");
    }
  });
}

// add button functionality

startButton.addEventListener("click", () => {
  if (!timerIsRunning) {
    console.log("running!");

    runTimer();
  }
});

// stop timer
