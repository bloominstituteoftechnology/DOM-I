//Grabbing my html elements to manipulate them
const divDigits = document.querySelector(".digits");
const digits = document.querySelectorAll('.digit');
const secTens = document.getElementById("secondTens")
const secOnes = document.getElementById("secondOnes")
const colon = document.getElementById("colon");
const msHuns = document.getElementById("msHundreds");
const msTens = document.getElementById('msTens');
//Setting timer(starting with 0)
digits.forEach(element => element.textContent = "0");
//Creating start button
const buttonsDiv = document.createElement('div');
divDigits.appendChild(buttonsDiv);
const startButton = document.createElement('button');
startButton.textContent = "Start";
startButton.classList.add("startBtn");
const resetButton = document.createElement('button');
resetButton.textContent = "Reset";
resetButton.classList.add("resetBtn");
buttonsDiv.appendChild(startButton);
buttonsDiv.appendChild(resetButton);


// startButton.onclick = colon.style.color = 'red';
//Start button functionality
// const startingMinutes = 10;
// let time = startingMinutes * 60;

 //setInterval(updateTimer, 1000);

//  function updateTimer() {
//     const minutes = Math.floor(time/60);
//     let seconds = time % 60;
//     secTens.innerHTML = `${minutes}`;
//     secOnes.innerHTML = `${seconds}`;
//     time--;
// };
// // setInterval(updateTimer, 1000);
// const startTimer = setInterval(updateTimer, 1000);
// startButton.onclick = function() {
//     startTimer()
// }
// startButton.onclick = updateTimer;


// function updateTimer() {
//     setInterval(function() {

//     })
// }


// secOnes.addEventListener('click', function() {
//     secOnes.textContent = "4";
// })

// startButton.addEventListener('click', function() {
//     startButton.textContent = "clicked";
// } )

time = 0;
function timer() {
    setInterval(function(){
        msHuns.textContent = time;
        time += 1
        if(time >= 9){
            clearInterval(time=0)
        }
    }, 100);
    setInterval(function(){
        msTens.textContent = time;
        time += 1;
        if(time >= 9){
            time=0
        }
    }, 10);
    setInterval(function(){
        secOnes.textContent = time;
        time += 1;
        if(time >= 9){
            time=0
        }
    }, 1000);
    setInterval(function(){
        secTens.textContent = time;
        time += 1;
        if(time >= 9){
            time=0
        }
    }, 10000);
};

function resetTimer() {
    digits.forEach(element => clearInterval(element.textContent = '0'));
}
startButton.addEventListener('click', timer);
resetButton.addEventListener('click', resetTimer);



