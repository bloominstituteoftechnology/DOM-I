const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "column";

// timer using closure and immediate functions
let timer = () => {
  const secondTens = document.querySelector("body > div > #secondTens");
  const secondOnes = document.querySelector("body > div > #secondOnes");
  const msHundreds = document.querySelector("body > div > #msHundreds");
  const msTens = document.querySelector("body > div > #msTens");

  const isDigits = document.querySelectorAll(".digits div");

  let counter = 0;

  // secondTens

  (() => {
    let num = 0;
    function incrementSec() {
      if (num < 1) {
        num++;
        secondTens.textContent = num;
        isDigits[0].classList.add("redDigit");
      } else if (num >= 1 && counter === 10) {
        secondTens.textContent = 1;
      }
    }

    window.setInterval(incrementSec, 10000);
  })();

  // secondOnes

  (() => {
    let num = 0;
    function incrementOnes() {
      if (num < 9) {
        counter++;
        num++;
        secondOnes.textContent = num;
      } else if (counter = 9) {
        secondOnes.textContent = 0;
        isDigits[1].classList.add("redDigit");

        // do something after counter is done
        const message = document.createElement("span");
        message.style.fontSize = "100px";
        message.classList.add("redDigit");
        message.textContent = "This Counter Is Trash...lol";

        body.appendChild(message);
      } 

    }

    window.setInterval(incrementOnes, 1000);
  })();

  // msHundreds

  (() => {
    let num = 0;
    function incrementMsHundreds() {
      if (num < 9 && counter < 9) {
        num++;
        msHundreds.textContent = num;
      } else if (num === 9) {
        num = 0;
        msHundreds.textContent = num;
      } else if ((counter = 10)) {
        counter++;
        msHundreds.textContent = 0;
        isDigits[3].classList.add("redDigit");
      }
    }

    window.setInterval(incrementMsHundreds, 100);
  })();

  // msTens

  (() => {
    let num = 0;
    function incrementMsTens() {
      if (num < 9 && counter < 9) {
        num++;
        msTens.textContent = num;
      } else if (num === 9) {
        num = 0;
        msTens.textContent = num;
      } else if ((counter = 10)) {
        msTens.textContent = 0;
        isDigits[4].classList.add("redDigit");
      }
    }

    window.setInterval(incrementMsTens, 10);
  })();
};

// new element: button

const button = document.createElement("button");
button.textContent = "Start Timer";

button.addEventListener("click", timer);

body.prepend(button);
