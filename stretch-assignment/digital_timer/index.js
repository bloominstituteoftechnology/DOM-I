let tenSecCounter = document.getElementById('secondTens');
let counter = 0;


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

function buttonStart() {
    setInterval(timeOutSec, 1000); // put this code in button

}