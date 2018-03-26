const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');


    secondOnes.innerHTML = 0;
    secondTens.innerHTML = 0;
    msHundreds.innerHTML = 0;
    msTens.innerHTML = 0;


    let msTensCounter = 0;
    let msHundredsCounter = 0;
    let secondsTensCounter = 0;
    let secondsOnesCounter = 0;


    if (msTens.innerHTML < 9) {
        msTensCounter++;
        msTens.innerHTML = msTensCounter.toString();
    } else {
        msTens.innerHTML === 0;
        msTensCounter === 0;
    }

        if (msHundreds.innerHTML < 9) {
            msHundredsCounter++;
            msHundreds.innerHTML = msHundredsCounter.toString();
        } else {
            msHundreds.innerHTML === 0;
            msHundredsCounter === 0;
        }


        if (secondTens.innerHTML < 9) {
            secondTensCounter++;
            secondTens.innerHTML = secondTensCounter.toString();
        } else {
            secondTens.innerHTML === 0;
            secondTensCounter === 0; 
        }


            if (secondOnes.innerHTML < 9) {
                secondOnesCounter++;
                secondOnes.innerHTML = secondOnesCounter.toString();
            } else {
                secondOnes.innerHTML === 0;
                secondOnesCounter === 0;
            }
            clearInterval();




//10ms = 1/10 second
//1,000ms = 1 second
// 10,000ms = 10 seconds
