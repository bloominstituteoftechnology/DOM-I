const one    = document.getElementById("secondTens");
const two    = document.getElementById("secondOnes");
const three  = document.getElementById("msHundreds");
const four   = document.getElementById("msTens");
const digits = document.querySelectorAll(".digit");
const body   = document.body;

// The values for the timer elements
let onePlus = 0,
   twoPlus = 0,
   threePlus = 0,
   fourPlus = 0;

// Holds the value for setInterval
let startId = 0;

// Format the timer
digits[0].style.marginTop = "20px";
body.style.flexDirection = "column";
one.innerText = 0;
two.innerText = 0;
three.innerText = 0;
four.innerText = 0;

// Add the Start and Reset buttons and include some styling
const startButton = createButton("Start", "green");
const resetButton = createButton("Reset", "blue");
const btnGroup = document.createElement("div");

btnGroup.style.width = "50%";
btnGroup.style.margin = "0 auto";
btnGroup.appendChild(startButton);
btnGroup.appendChild(resetButton);
body.appendChild(btnGroup);

// Add event listeners to the buttons
startButton.addEventListener("click", start);
resetButton.addEventListener("click", reset);

function reset() {
   // Return the timer to its original color
   digits.forEach(digit => digit.classList.remove("redDigit"));
   
   // Reset the numbers and the variables that represent them
   one.innerText = 0;
   two.innerText = 0;
   three.innerText = 0;
   four.innerText = 0;
   onePlus = 0;
   twoPlus = 0;
   threePlus = 0;
   fourPlus = 0;
}

function createButton(caption, color) {
   const button = document.createElement("button");
   button.innerText = caption;
   button.style.padding = "10px";
   button.style.margin = "10px";
   button.style.fontSize = "26px";
   button.style.width = "45%";
   button.style.color = color;
   button.style.fontWeight = 900;
   return button;
}

// Allow the timer to count up to 9:99, then hard code the final result
function finale() {
   digits.forEach(digit => digit.classList.add("redDigit"));
   one.innerText = 1;
   two.innerText = 0;
   three.innerText = 0;
   four.innerText = 0;
}

// The call to this function increments the last digit of the counter
// After the last digit reaches nine, the next call resets it to zero,
//    and carries the 1 to the next digit to its left, and cascades this
//    this action to the left
function runTimer() {
   if (fourPlus >= 9) {
      ++threePlus;
      fourPlus = -1;
   }
   ++fourPlus;

   if (threePlus > 9) {
      ++twoPlus;
      threePlus = 0;
   }

   if (twoPlus > 9) {
      startButton.disabled = false;
      clearInterval(startId); // Stop the timer
      finale();
      return;
   }

   one.innerText = onePlus;
   two.innerText = twoPlus;
   three.innerText = threePlus;
   four.innerText = fourPlus;
}

// Initialize the timer
function start() {
   startId = window.setInterval(runTimer, 10);
   startButton.disabled = true;
}
