
let seconds = 0;

// create a div to hold the buttons
const buttonDiv = document.createElement('div');
    

const countMilliSeconds = () => {
    let milliSeconds = 0;
    // create an empty array to store the milliseconds
    const msArray = [];
    // retrieve all the elements we need
    const msTens = document.querySelector('#msTens');
    const ms = document.querySelector('#msTens, #msHundreds');
    
    /* Every 10ms add the digits in milliseconds to the array, as long 
    as the milliseconds is less than 100 and seconds is less than 11.
    
    set the text content for milliseconds to be the last element added to the array. 
    
    remove the '-' by setting msTens to equal ''*/
    window.setInterval( () => {
        if(milliSeconds < 100 && seconds < 11){
            msArray.push(milliSeconds++)
            ms.textContent = msArray.length - 1;
            msTens.textContent = "";
         };
    }, 10);
};

const countSeconds = () => {

    // create an empty array to store the seconds
    const secondsArray = [];

    // retrieve all the elements we need
    const secondOnes = document.querySelector('#secondOnes');
    const secondTens = document.querySelector('#secondTens');
    const redDigits =  document.querySelector('.digits');
    
 
    /* every second add 1 digit to the array as long as the array's
    length is less than 11 and display that digit in the dom, if the
    length of the array is greater than 11 change the text color to red
    */
    window.setInterval( () => {
        if(seconds < 11){
            secondsArray.push(seconds++);
            secondOnes.textContent = secondsArray.length - 1;
            secondTens.textContent = '';            
         } else {
            redDigits.classList.add('redDigit');
        }
        countMilliSeconds();
        
    }, 1000);
};

const startTimer = () => {
    
    // grab the existing container
    const digits = document.querySelector('.digits');

    // create the button
    const startButton = document.createElement('button');

    // add the button container div to the dom
    const appendDiv = digits.appendChild(buttonDiv);

    // add the button to the dom
    const appendStartButton = buttonDiv.appendChild(startButton);

    // style the button
    startButton.style.marginLeft = '-0.5rem';
    startButton.style.backgroundColor = 'green';
    startButton.style.padding ='0.2rem 1.2rem';
    startButton.style.color = '#fff';
    // add the button text
    startButton.textContent = 'start';

    // add the event listener
    const startEvent = startButton.addEventListener('click', () => {
        countSeconds();
    });

    return startEvent;
};

const resetTimer = () => {
    // grab the existing container
    const digits = document.querySelector('.digits');

    // create the button
    const resetButton = document.createElement('button');

    // style the button
    resetButton.style.marginLeft = '1.5rem';
    resetButton.style.backgroundColor = 'red';
    resetButton.style.padding ='0.2rem 1rem';
    resetButton.style.color = '#fff';

    // add the button to the dom
    const appendResetButton = buttonDiv.appendChild(resetButton);

    // add the button text
    resetButton.textContent = 'reset';

    const resetEvent = resetButton.addEventListener('click', () => {
        // grab all the elements we need
        const secondOnes = document.querySelector('#secondOnes');
        const secondTens = document.querySelector('#secondTens');
        const ms = document.querySelector('#msTens, #msHundreds');
        const digits =  document.querySelector('.redDigit');

        // update the text content of all the elements selected
        secondOnes.textContent ='-';
        secondTens.textContent = '-';
        ms.textContent = '--'

        // change the text color to black
        digits.style.color = 'black';
    });

    return resetEvent;
}

    startTimer();
    resetTimer();
