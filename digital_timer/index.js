const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");

timer();

function timer () {
    init();

    function init () {
        secondsTens.innerHTML = "0";
        secondsOnes.innerHTML = "0";
        msHundreds.innerHTML = "0";
        msTens.innerHTML = "0";

    }



function increment () {
    let count = 0;
    function log() {
        count++; 
        return {
            secondsTens:innerHTML = Math.floor((count % 10000) / 1000),
            secondsOnes:innerHTML = Math.floor((count % 1000) / 100),
            msHundreds:innerHTML = Math.floor((count % 100) / 10),
            msTens:innerHTML = Math.floor(count % 10)
        }

}
}
function updateTimer () {
    secondTens.innerHTML = this.secondTensPart();
    secondOnes.innerHTML = this.secondOnesPart();
    msHundreds.innerHTML = this.mshundredsPart();
    msTens.innerHTML = this.msTensPart();

    if(this.check()) {
        this.increment();
    }else{
        this.endTimer();
    }
}
    return count < 1000;
}

function counting() {
    timer();
}

// }

// function endTimer () {
//     if (count >= 5) {
//         clearInterval(myInterval)
//     }
// }



const myInterval = setInterval(timer, 1000);
// window.setTimeout(() => { console.log()}, 1000);