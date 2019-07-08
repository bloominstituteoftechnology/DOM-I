
const secondsTens = document.getElementById("secondTens"); 
const secondOnes = document.getElementById("secondOnes"); 
const msHundreds = document.getElementById("msHundreds"); 
const msTens = document.getElementById("msTens"); 
let totalSeconds = 0; 
window.setInterval(time, 1000); 

function time() {
    totalSeconds++ 

    if(totalSeconds > 1000) {
        secondsTens.innerHTML = 1
        secondOnes.innerHTML = 0
        msHundreds.innerHTML = 0
        msTens.innerHTML = 0

        return false;

    } else {
        let number = totalSeconds.toString().split(" ")
        if(number.length === 3) {
            msTens.innerHTML = number[2]
            msHundreds.innerHTML = number[1]
            secondOnes.innerHTML = number[0]
        }

        if(number.length === 2) {
            msTens.innerHTML = number[1]
            msHundreds.innerHTML = number[0] 
        }

        if(number.length === 1) {
            msTens.innerHTML = number[0]
        }
        return true; 
    } 
}




// function 

// const callBack = window.setInterval(function() {
//     time() ? console.log(totalSeconds) : clearInterval(callBack);
//   }, 10)








