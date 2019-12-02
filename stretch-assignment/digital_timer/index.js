let mainInterval = 0;

let timerSeconds = 0;
let timerTenths = 0;
let timerHundreths = 0;
let timerMS = 0;

function startTimer() {
  document.getElementById("startTimerButton").disabled = true;
  clearTimer();
  mainInterval = window.setInterval(digitalTimer, 10);
}

function resetTimer() {
  document.getElementById("startTimerButton").disabled = false;
  clearTimer();
}

function clearTimer() {
  window.clearInterval(mainInterval);
  document.getElementById("secondOnes").textContent = "-";
  document.getElementById("secondTens").textContent = "-";
  document.getElementById("msHundreds").textContent = "-";
  document.getElementById("msTens").textContent = "-";
  document.querySelector("div.digits").style.color = "";
  timerSeconds = 0;
  timerTenths = 0;
  timerHundreths = 0;
  timerMS = 0;
}

function digitalTimer() {
  timerMS += 10;

  if (timerMS % 1000 === 0) {
    timerSeconds += 1;

    if (timerSeconds === 10) {
      window.clearInterval(mainInterval);
      document.getElementById("secondTens").textContent = 1;
      document.getElementById("secondOnes").textContent = 0;
      document.getElementById("msHundreds").textContent = 0;
      document.getElementById("msTens").textContent = 0;
      document.querySelector("div.digits").style.color = "red";
      document.getElementById("startTimerButton").disabled = false;
      timerSeconds = 0;
      timerTenths = 0;
      timerHundreths = 0;
      timerMS = 0;
      
      return; // DONE!
    }

    document.getElementById("secondOnes").textContent = timerSeconds;
  }

  if (timerMS % 100 === 0) {
    timerTenths += 1;
    
    if (timerTenths === 10) {
      timerTenths = 0;
    }

    document.getElementById("msHundreds").textContent = timerTenths;
  }

  if (timerMS % 10 === 0) {
    timerHundreths += 1;
    
    if (timerHundreths === 10) {
      timerHundreths = 0;
    }
    
    document.getElementById("msTens").textContent = timerHundreths;
  }
}