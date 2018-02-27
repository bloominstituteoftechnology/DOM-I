const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");

timer();

function timer () {
  
  init();
  const myInterval = window.setInterval(updateTimer, 10);

  function init() {
    secondTens.innerHTML = '0';
    secondOnes.innerHTML = '0';
    msHundreds.innerHTML = '0';
    msTens.innerHTML = '0';
    
    // remove red color in text.
    secondTens.parentElement.classList.remove("redDigit");
}

    let counter = 0;
    let last = 0;
    let second = 0;
    let first = 0;

    function increment() {
        counter++;
    }

    function endTimer () {
        // convert the color to red
        secondTens.parentElement.classList.add("redDigit");
      
        clearInterval(myInterval);
    }

    function updateTimer() {
       increment();

        if (counter === 10){
            counter = 0;
            first++;
        }

        if (first === 10){
            first = 0;
            second++;
        }
        
        if (second === 10){
            second = 0;
            last++;
        }
        
        secondTens.innerHTML = last;
        secondOnes.innerHTML = second;
        msHundreds.innerHTML = first;
        msTens.innerHTML = counter;
        
       if(last === 1) endTimer();// base case
    }
}
