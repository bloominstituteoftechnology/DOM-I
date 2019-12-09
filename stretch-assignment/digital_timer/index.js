// Variables for the timer
const secondTens = document.getElementById("secondTens")
const secondOnes = document.getElementById("secondOnes")
// const colon      = document.getElementById("colon")
const msHundreds = document.getElementById("msHundreds")
const msTens     = document.getElementById("msTens")
const digits     = document.querySelector('.digits')

// Variables for the button and its container
const body   = document.body;
const div    = document.createElement('div')
const button = document.createElement('button')
const br     = document.createElement('br')
const jsMain = document.getElementById('jsMain')

// Timer actions
secondTens.innerText = 0;
secondOnes.innerText = 0;
msHundreds.innerText = 0;
msTens.innerText = 0;

let tenths = 0, hundredths = 0;
let tens = 0, hundreds = 0;

const stopWatch = setInterval(timer, 10);

function timer() {
  // hundredths should count to nine, then pass 1 to tenths
  (tens < 9) ? ++tens : ++hundreds;
  msHundreds.innerText = tens;
}

clearInterval(stopWatch)
timer();

// When timer reaches 10 seconds, the digits turn red
digits.style.color = "red"

// // Button actions
// button.innerText = "START"

// // Add a div containing a button below .digits
// div.appendChild(button)
// body.appendChild(div)

// // Insert the button in the body above the <script>
// jsMain.insertAdjacentElement('beforebegin', div)
