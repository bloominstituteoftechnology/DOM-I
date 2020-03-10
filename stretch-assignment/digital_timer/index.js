let tenSecCounter = document.getElementById('secondTens');
let counter = 1;
let buttonClick = 0

// tenSecCounter.setInterval(function () {
//     tenSecCounter.textContent = 'hi'
// }, 10000);


function timeOutSec() {


    if (counter <= 10) {

        tenSecCounter.textContent = counter;
        counter++;

    }
    if (counter > 10) { //weird bug
        tenSecCounter.style.color = 'red';
    }
};

//button start timer
document.querySelector('button').addEventListener('click', function () {

    if (buttonClick <= 0) {
        buttonClick++;
        setInterval(timeOutSec, 1000);

        console.log(buttonClick)
    } else {
        counter = 0;
        tenSecCounter.textContent = 0
        tenSecCounter.style.color = 'green';

    }


});

function buttonStart() {

    // put this code in button

}