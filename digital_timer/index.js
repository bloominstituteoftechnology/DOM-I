const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');


    document.getElementById('secondOnes').innerHTML = 0;
    document.getElementById('secondTens').innerHTML = 0;
    document.getElementById('msHundreds').innerHTML = 0;
    document.getElementById('msTens').innerHTML = 0;

let timer = setInterval(function() {
    if (msTens.innerHTML < 9) {
        msTens.innerHTML++;
    } else {
        msTens.innerHTML === 0;
    }
        if (msHundreds.innerHTML < 9) {
            msHundreds.innerHTML++;
        } else {
            msHundreds.innerHTML === 0;
        }
        if (secondTens.innerHTML < 9) {
            secondTens.innerHTML++;
        } else {
            secondTens.innerHTML === 0;
        }
            if (secondOnes.innerHTML < 9) {
                secondOnes.innerHTML++;
            } else {
                secondOnes.innerHTML === 0;
            }

                clearInterval();
})




//10ms = 1/10 second
//1,000ms = 1 second
// 10,000ms = 10 seconds
