const digits = document.querySelector(".digits");
const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");
const msOnes = document.getElementById("msOnes");

timer();

function timer () {

    let ms = 0;
    secondTens.innerHTML = "0";
    secondOnes.innerHTML = "0";
    msHundreds.innerHTML = "0";
    msTens.innerHTML = "0";
    
    const timerInterval = window.setInterval(() => {
      ms += 10;
      if (ms > 9999) {
        endTimer(timerInterval); 
      } 

      if (ms === 10000) {
        secondTens.innerHTML = "1";
        secondOnes.innerHTML = "0";
        msHundreds.innerHTML = "0";
        msTens.innerHTML = "0";
      } else if (ms % 1000 === 0) {
        secondOnes.innerHTML = increment(secondOnes.innerHTML);
        msHundreds.innerHTML = "0";
        msTens.innerHTML = "0";
      } else if (ms % 100 === 0) {
        msHundreds.innerHTML = increment(msHundreds.innerHTML);
        msTens.innerHTML = "0";
     
      } else {
        msTens.innerHTML = increment(msTens.innerHTML);
      };
    }, 10);
  
  
  function increment (string) {
    let number = Number(string) + 1;
    return number + '';
  }

  function endTimer (intervalId) {
    window.clearInterval(intervalId);
    Array.from(digits.children).forEach(digit => {
      digit.classList.add("redDigit");
    })
  }
}