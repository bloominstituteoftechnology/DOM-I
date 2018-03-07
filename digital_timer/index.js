function updateTime() {
  let mlseconds = 0;
  let seconds = 0;
  let mlsecondsArr = [];
  let secondsArr = [];
  let secondTens = document.getElementById("secondTens");
  let secondOnes = document.getElementById("secondOnes");
  let msHundreds = document.getElementById("msHundreds");
  let msTens = document.getElementById("msTens");
  let digits = document.querySelector(".digits");
  digits.classList.remove("redDigit");
  intervalId = setInterval(incrementDigit, 10);

  function incrementDigit() {
    mlsecondsArr = mlseconds.toString().padStart(3, "0").split("");
    secondsArr = seconds.toString().padStart(2, "0").split("");
    secondTens.innerHTML = secondsArr[0];
    secondOnes.innerHTML = secondsArr[1];
    msHundreds.innerHTML = mlsecondsArr[0];
    msTens.innerHTML = mlsecondsArr[1];

    mlseconds += 10;
    if (mlseconds === 1000) {
      mlseconds = 0;
      seconds += 1;
    }
    
    if (seconds === 10 && mlseconds > 0) {
      clearInterval(intervalId);
      digits.classList.add("redDigit");
    }
  }
}

// window.onload = updateTime;
let start = document.querySelector(".startCounter");
console.log(start);
start.addEventListener('click', updateTime);