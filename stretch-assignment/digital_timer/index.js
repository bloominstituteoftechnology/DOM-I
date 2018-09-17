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

let milliseconds = 0;

let getmsTens = document.getElementById('#msTens');

// let msTensNum = document.createElement('p');
// let msHundredsNum = document.createElement('p');
// let secondOnesNum = document.createElement('p');
// let secondTensNum = document.createElement('p');







function incrementHundredths(){
    seconds += 1;
    setMsHundreds[4].innerText = seconds;
    if (seconds === 9){
        seconds = -1;
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







// let increment = setInterval(incrementOnesPlace, 10000);

let incrementTenz = setInterval(incrementTenths, 1000);

// let incrementOnes = setInterval(incrementOnesPlace, 1000);

// let incrementHundred = setInterval(incrementHundredsPlace, 1000);



let getmsHundreds = document.getElementById('#msHundreds');


let getSecondOnes = document.getElementById('#secondOnes');


let getSecondTens = document.getElementById('#secondTens');

let setMsHundreds = document.querySelectorAll('div');

setMsHundreds[1].innerText = 0

setMsHundreds[2].innerText = 0

setMsHundreds[4].innerText = 0

setMsHundreds[5].innerText = 0

