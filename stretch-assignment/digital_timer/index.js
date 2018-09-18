// <!DOCTYPE html>
// <html>
//   <head>
//     <title>DOM I</title>
//     <link rel="stylesheet" href="./styles.css">
//   </head>
//   <body>
//     <div class="digits">
//       <div class="digit" id="secondTens">-</div>
//       <div class="digit" id="secondOnes">-</div>
//       <div class="digit" id="colon">:</div>
//       <div class="digit" id="msHundreds">-</div>
//       <div class="digit" id="msTens">-</div>
//     </div>
//   </body>
// </html>

//body
//digit
//redDigit

let seconds = 0;
let hundredths = 0;
let tenths = 0;
let tens = "";

let getmsTens = document.getElementById('#msTens');

// let msTensNum = document.createElement('p');
// let msHundredsNum = document.createElement('p');
// let secondOnesNum = document.createElement('p');
// let secondTensNum = document.createElement('p');



let redDistribute = document.querySelectorAll('.digit');


let myBtnOn = document.createElement('button');
let myBtnOff = document.createElement('button');

let buttonContainer = document.createElement('section');


let bodyPointer = document.querySelector('body');
bodyPointer.appendChild(buttonContainer);
let insertButton = document.querySelector('section');
insertButton.appendChild(myBtnOn);
insertButton.appendChild(myBtnOff);

myBtnOn.classList.add('button-style');
myBtnOff.classList.add('button-style');

let buttonStyle = document.querySelectorAll('button-style');

myBtnOn.innerText = 'On';
myBtnOn.style.backgroundColor = 'blue';
myBtnOn.style.color = 'white';

myBtnOn.addEventListener('click', clickOn)
function clickOn() {
incrementHundredths();
setInterval(incrementHundredths, 10);
}

myBtnOff.innerText = 'Off';
myBtnOff.style.backgroundColor = 'red';
myBtnOff.style.color = 'white';

myBtnOff.addEventListener('click', clickOff);
function clickOff() {
    clearInterval(incrementTenz);
    
}


function incrementHundredths(){

    hundredths += 1;

    setMsHundreds[5].innerText = hundredths;
    setMsHundreds[4].innerText = tenths;
    setMsHundreds[2].innerText = seconds;
    setMsHundreds[1].innerText = tens;

    if (hundredths === 9){
        hundredths = -1;
        tenths +=1;
    }

    if (tenths === 10){
        tenths = 0;
        seconds += 1;
        
    }

    else if (seconds === 10){
        
        seconds = 0;
        tenths = 0;
        hundredths = 0;
        clearInterval(incrementTenz);
        
        for(i = 0; i < redDistribute.length; i++){
            redDistribute[i].classList.add('redDigit');
            redDistribute[2].classList.remove('redDigit');
        }
    }
    
   
}

function incrementTenths(){
    seconds += 1;
    setMsHundreds[2].innerText = seconds;
    if (seconds === 9){
        seconds = -1;
    }
}

function incrementOnesPlace(){
    seconds += 1;
    setMsHundreds[1].innerText = seconds;
    if (seconds === 9){
        seconds = -1;

    }
}

function incrementHundredsPlace(){
    seconds += 1;
    setMsHundreds[0].innerText = seconds;
    if (seconds === 9){
        seconds = -1;
    }
}


let incrementTenz = setInterval(incrementHundredths, 10);

let getmsHundreds = document.getElementById('#msHundreds');

let getSecondOnes = document.getElementById('#secondOnes');

let getSecondTens = document.getElementById('#secondTens');

let setMsHundreds = document.querySelectorAll('div');

setMsHundreds[1].innerText = 0

setMsHundreds[2].innerText = 0

setMsHundreds[4].innerText = 0

setMsHundreds[5].innerText = 0

