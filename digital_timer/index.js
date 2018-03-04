// Grab Object Class List
const digits = document.getElementsByClassName("digits");
const digit = document.getElementsByClassName("digit");

// Store Class List Members
const allText = digits[0];

const tens = digit[0];
const ones = digit[1];
const msH = digit[3];
const msT = digit[4];

// Initialize StopWatch Variables
let ten = 0;
let one = 0;
let h = 0;
let t = 0;

// Reset StopWatch on PageLoad 
// I could set up a delay for this
// Or a reset button, but I'm  just
// reproducing what Ivans page example

tens.innerHTML = ten;
ones.innerHTML = one;
msH.innerHTML = h;
msT.innerHTML = t;


function startTimer() {
  t++;

  if (t > 9) {
    h++;
    t = 0;
    if (h > 9) {
      one++;
      h = 0;
      if (one > 9) {
        ten++;
        one = 0;
      }
    }
  }

  tens.innerHTML = ten;
  ones.innerHTML = one;
  msH.innerHTML = h;
  msT.innerHTML = t;

  if (ten === 1) {
    clearInterval(myTimer);
    allText.classList.add('redDigit');
  }
}

let myTimer = setInterval(startTimer,10);

// allText.classList.add("redDigit")