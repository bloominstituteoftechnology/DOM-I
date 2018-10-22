const secondTens = document.querySelector("#secondTens");
const secondOnes = document.querySelector("#secondOnes");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");




function timer() {
    msTens.textContent = 0;
    msHundreds.textContent = 0;
    secondOnes.textContent = 0;
    secondTens.textContent = 0;
    let msHundred = 0;
    let msTen = 0;
    let secondOne = 0;
    let secondTen = 0;


    function incrementMSTens() {
        if (msHundred === 9) {
            msHundred = 0;
        }
        msHundred += 1;
        msTens.textContent = msHundred;

    }

    function incrementMSHundreds() {
        if (msTen === 9) {
            msTen = 0;
        }
        msTen += 1;
        msHundreds.textContent = msTen;
    }

    function incrementSeconds() {
        if (secondOne === 9) {
           secondOne = 0;
        }
        secondOne += 1;
        secondOnes.textContent = secondOne;
        
    }

    function incrementTens() {
        secondTen = 1;
        secondTens.textContent = secondTen;

        secondTens.style.color = 'red';
        secondOnes.style.color = 'red';
        msTens.style.color = 'red';
        msHundreds.style.color = 'red';
    }

    setInterval(incrementMSTens, 10);
    setInterval(incrementMSHundreds, 100);
    setInterval(incrementSeconds, 1000);
    setInterval(incrementTens, 10000);
    
}

// timer();
