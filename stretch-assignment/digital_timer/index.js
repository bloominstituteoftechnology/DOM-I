
const clock = document.querySelector('.digits')
const secondTens = document.querySelector('#secondTens'); 
const secondOnes = document.querySelector('#secondOnes'); 
const msHundreds = document.querySelector('#msHundreds'); 
const msTens = document.querySelector('#msTens'); 
const startButton = document.querySelector('#start'); 
const resetButton = document.querySelector('#reset')
const stopButton = document.querySelector('#stop');



//all values initially set to 0 
msTens.innerHTML = 0;
msHundreds.innerHTML = 0;
secondOnes.innerHTML = 0; 
secondTens.innerHTML = 0; 
let timer = 0;
// msTens.innerHTML = 0;
// msHundreds.innerHTML = 0;
// secondOnes.innerHTML = 0; 
// secondTens.innerHTML = 0; 


let startTime = false;
let newTimer; 

startButton.addEventListener('click', function(){
    startButton.disabled = true; 
    stopButton.disabled = false;
    startTime = true; 
    if (startTime){
        newTimer = setInterval(count, 10);
    }
})

stopButton.addEventListener('click', function(){
    clearInterval(newTimer); 
    startButton.disabled = false;
})


let count = function(){
    timer += 1; 
    let time = timer.toString();
    if(timer < 10) {
        msTens.innerHTML = time
    }else if(timer < 100){
        msHundreds.innerHTML = time[0]; 
        msTens.innerHTML = time[1]; 
    }else if(timer < 1000){ 
        secondOnes.innerHTML = time[0];
        msHundreds.innerHTML = time[1]; 
        msTens.innerHTML = time[2]; 
    }else if(timer === 1000){
        secondTens.innerHTML = time[0]
        secondOnes.innerHTML = time[1];
        msHundreds.innerHTML = time[2]; 
        msTens.innerHTML = time[3]; 
        clock.style.color = "red"; 
    }
}

resetButton.addEventListener('click', function(){
    msTens.innerHTML = 0;
    msHundreds.innerHTML = 0;
    secondOnes.innerHTML = 0; 
    secondTens.innerHTML = 0; 
    startButton.disabled = false; 
    timer = 0; 
    clock.style.color = "black"; 
    startTime = false;
    clearInterval(newTimer); 
    stopButton.disabled = true;
})

