
let seconds = 0;

const countToTen = () => {
    const secondsArray = [];

    const secondOnes = document.querySelector('#secondOnes');
    const secondTens = document.querySelector('#secondTens');
    const redDigits =  document.querySelector('.digits');
    
 
    // every second add 1 digit to the array and display that digit in the dom
    window.setInterval( () => {
        if(seconds < 11){
            secondsArray.push(seconds++);
            secondOnes.textContent = secondsArray.length - 1;
            secondTens.textContent = '-';
            
         } else {
            secondTens.textContent = '';
            redDigits.classList = 'redDigit';
        }
        countMilliSeconds();
        
    }, 1000)
}

const countMilliSeconds = () => {

    const msArray = [];
    let milliSeconds = 0;
    const msTens = document.querySelector('#msTens');
    const ms = document.querySelector('#msTens, #msHundreds');
    let millisecondsInterval = window.setInterval( () => {
        if(milliSeconds < 100 && seconds < 11){
        msArray.push(milliSeconds++)
        ms.textContent = msArray.length - 1;
           msTens.textContent = "";
         }
    }, 10);
}
countToTen();