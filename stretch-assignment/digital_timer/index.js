const one    = document.getElementById("secondTens")
const two    = document.getElementById("secondOnes")
const three  = document.getElementById("msHundreds")
const four   = document.getElementById("msTens")
const digits = document.querySelectorAll(".digit")
const body = document.body;

let onePlus = 0;
let twoPlus = 0;
let threePlus = 0;
let fourPlus = 0;

function reset() {
   initialize();
   digits.forEach(digit => digit.style.color = 'black');
   clearInterval(start);
   startButton.disabled = false;

}

function initialize() {
   one.innerText = 0;
   two.innerText = 0;
   three.innerText = 0;
   four.innerText = 0;
   onePlus = 0;
   twoPlus = 0;
   threePlus = 0;
   fourPlus = 0;   
}

initialize()

digits[0].style.marginTop = "20px"
body.style.flexDirection = 'column'


// Add a button to stop the counter
function appendButton(caption, color) {
   const button = document.createElement('button')
   button.innerText = caption;
   button.style.padding = '10px'
   button.style.margin = '10px'
   button.style.fontSize = '26px'
   button.style.width = '45%';
   button.style.color = color;
   button.style.fontWeight = 900;
   return button;
}

const startButton = appendButton('Start', 'green')
const resetButton = appendButton('Reset', 'blue')
const btnGroup = document.createElement('div')

   btnGroup.style.width = '50%'
   btnGroup.style.margin = '0 auto'
   btnGroup.appendChild(startButton)
   btnGroup.appendChild(resetButton)
   body.appendChild(btnGroup)

// Create a timer
function start() {
   window.setInterval(callback, 10)
   startButton.disabled = true;
}

function callback() {
   if (fourPlus >= 9) {
      ++threePlus;
      fourPlus = -1;
   } ++fourPlus;

   if (threePlus > 9) {
      ++twoPlus;
      threePlus = 0;
   }

   if (twoPlus > 9) {
      finale();
      return;
   }
   
   one.innerText = onePlus;
   two.innerText = twoPlus;
   three.innerText = threePlus;
   four.innerText = fourPlus;
}

startButton.addEventListener('click', start)
resetButton.addEventListener('click', reset)

function myStopFunction() {
  clearInterval(start);
}

function finale() {
   digits.forEach(digit => digit.style.color = 'red');
   one.innerText = 1;
   two.innerText = 0;
   three.innerText = 0;
   four.innerText = 0;
}