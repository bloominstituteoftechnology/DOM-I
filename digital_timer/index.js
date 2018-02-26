const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");
const colon = document.getElementById("colon");


timer();

function timer () {
   function init () {
       secondTens.innerHTML = 0;
       secondOnes.innerHTML = 0;
       msTens.innerHTML = 0;
       msHundreds.innerHTML = 0;
       increment();
   }

   let count = 0;

   const increment = setInterval(() => {
       count++;
       updateTimer();
       if (count === 1000) {
           endTimer();
       }
   }, 10);

   function endTimer(){
       clearInterval(increment);
       secondTens.classList.add("redDigit");
       secondOnes.classList.add("redDigit");
       msTens.classList.add("redDigit");
       msHundreds.classList.add("redDigit");
       colon.classList.add("redDigit");
       //add red digits class to digit class
   }

   function updateTimer(){
        secondTens.innerHTML = Math.floor(count / 1000);
        secondOnes.innerHTML = Math.floor(count / 100 % 100 % 10);
        msHundreds.innerHTML = Math.floor(count / 10 % 10);
        msTens.innerHTML = Math.floor(count % 100 % 10);
   }
   init();

}