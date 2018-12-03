// // Timer
// const secondTens = document.querySelector('#secondTens');
// const secondOnes = document.querySelector('#secondOnes');
// const colon = document.querySelector('#colon');
// const msHundreds = document.querySelector('#msHundreds');
// const msTens = document.querySelector('#msTens');
// // Buttons
// const startBtn = document.querySelector(".start");
// const stopBtn = document.querySelector(".stop");
// const restartBtn = document.querySelector(".restart");

// let secTenTime = 0;
// let secOneTime = 0;
// let msHunTime = 0;
// let msTenTime = 0;

// secondTens.textContent=`${secTenTime}`;
// secondOnes.textContent=`${secOneTime}`;
// msHundreds.textContent=`${msHunTime}`;
// msTens.textContent=`${msTenTime}`;  
// let timer;
// let timerIsGoing = false;


// function start() {

// let timer = function(){
//     setInterval(function(){
//         msTenTime += 1
//         secondTens.innerHTML=`${secTenTime}`;
//         secondOnes.innerHTML=`${secOneTime}`;
//         msHundreds.innerHTML=`${msHunTime}`;
//         msTens.innerHTML=`${msTenTime}`;  
//         if (msTenTime == 9){
//             msHunTime += 1;
//             msTenTime = 0;
//             if(msHunTime == 6){
//               secOneTime += 1; 
//               msHunTime = 0;
//             if(secOneTime == 10){
//                 secTenTime += 1;
//                 secOneTime = 0; 
      
//             }
//           } 
//         }
//       }, 1000);
// };
// }




// // const stopTimer = function(){
// //     console.log("click");
// //     clearInterval(timer);
// // }

let msTens = document.querySelector("#msTens");
let msHundreds = document.querySelector("#msHundreds");
let secondOnes = document.querySelector("#secondOnes");
let secondTens = document.querySelector("#secondTens");
let semicolon = document.querySelector("#colon");
let startButton = document.querySelector(".start");
let restartButton = document.querySelector(".restart");

msTens.textContent = 0;
msHundreds.textContent = 0;
secondOnes.textContent = 0;
secondTens.textContent = 0;

let timer;
let timerIsGoing = false;

function start() {
    if (timerIsGoing === false) {
        timer = setInterval(msTen, 10);
        timerIsGoing = true;
        startButton.textContent = "Pause Timer"
    } else {
        timer = clearInterval(timer);
        startButton.textContent = "Start Timer"
        timerIsGoing = false;
    }
}

function restart() {
    clearInterval(timer);
    msTens.textContent = 0;
    msHundreds.textContent = 0;
    secondOnes.textContent = 0;
    secondTens.textContent = 0;
    msTens.classList.remove("redDigit");
    msHundreds.classList.remove("redDigit");
    secondOnes.classList.remove("redDigit");
    secondTens.classList.remove("redDigit");
    colon.classList.remove("redDigit");
    startButton.disabled = false;
    startButton.textContent = "Start Timer"
    timerIsGoing = false;   
}

function secTens() {
    if (secondTens.textContent === "0") {
        secondTens.textContent = 1;
        msTens.classList.add("redDigit");
        msHundreds.classList.add("redDigit");
        secondOnes.classList.add("redDigit");
        secondTens.classList.add("redDigit");
        colon.classList.add("redDigit");
        clearInterval(timer);
        startButton.textContent = "Timer Done"
        startButton.disabled = true;
    } 
    else{
        secondTens.textContent = parseInt(secondTens.textContent) + 1;
    }
}

function secOnes() {
    if (secondOnes.textContent === "9") {
        secondOnes.textContent = 0;
        secTens();
    }
    else{
        secondOnes.textContent = parseInt(secondOnes.textContent) + 1;
    }
}

function msHund() {
    if (msHundreds.textContent === "6") {
        msHundreds.textContent = 0;
        secOnes();
    }
    else{
        msHundreds.textContent = parseInt(msHundreds.textContent) + 1;
    }
}

function msTen() {
    if (msTens.textContent === "9") {
        msTens.textContent = 0;
        msHund();
    }
    else{
        msTens.textContent = parseInt(msTens.textContent) + 1;
    }
}