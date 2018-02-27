//document.getElementById('colon').innerHTML = 'Hello World';

//console.log("Hello.");
/* function counter() {
for (let i = 1; i < 11; i++) {
    //document.getElementById('colon').innerHTML = i;
    console.log(i);
}
}
counter();
var counter10 = window.setInterval(counter, 10000); 
counter10; */

/* const secondsOnes = document.getElementById("secondOnes");
const secondsTens = document.getElementById("secondTens");
const msTens = document.getElementById("msTens");
const msHundreds = document.getElementById("msHundreds"); */
const secondsOnes = document.getElementById("secondOnes");
const secondsTens = document.getElementById("secondTens");
const msTens = document.getElementById("msTens");
const msHundreds = document.getElementById("msHundreds");


function timer() {
  //document.getElementById('colon').innerHTML = 'Hello World';
  
  init();
  //for (i = 1; i < 10; i++) {
  display_function();
  //}
  //increment(secondOnes);
  //display_function();


  function init() {
    secondTensVal = 0;
    secondOnesVal = 0;
    msTensVal = 0;
    msHundredsVal = 0;
  }

  function display_function() {
    /* secondTens.innerHTML = window.setInterval(increment(secondTensVal), 10000);
    secondOnes.innerHTML = window.setInterval(increment(secondOnesVal), 1000);
    msTens.innerHTML = window.setInterval(increment(msTensVal), 100);
    msHundreds.innerHTML = window.setInterval(increment(msHundredsVal), 10); */
    window.setInterval(() => {
        //msHundreds.innerHTML = "It's been 5 seconds already";
         
        msHundreds.innerHTML = `This is i: ${for (let i = 0; i < 50; i++) {return i++}}`;
    }, 5000);

    window.setInterval(() => {
        msHundreds.innerHTML = "It's been 7 second already";
    }, 7000);

    };
  // every second we will pass the secondOnes to increment:
  //delay 1 sec with setInterval:

  function increment(count) {
    
    return count++;
    }

  /*(let i = 1; i < 20; i ++) {
    setInterval(increment(secondOnes), 3000);
  } */

  //setInterval(display_function(), 3000)


  



  /* function increment(count) {
  return count++;
  }*/

  function endTimer() {
    }

function updateTimer() {
}

}

timer();





// TODO: 
// setInteval()
