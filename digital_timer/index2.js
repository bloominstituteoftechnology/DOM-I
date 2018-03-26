const timer = function() {
    //  set each id as it's own variable
    const secondTens = document.getElementById("secondTens");
    const secondOnes = document.getElementById("secondOnes");
    const msHundreds = document.getElementById("msHundreds");
    const msTens = document.getElementById("msTens");
    const digitsParentDiv = secondOnes.parentElement; // could have used any of the children above
    let count = 0;
    
    return {
        init: function() {
            secondTens.innerHTML = '0';
            secondOnes.innerHTML = '0';
            msHundreds.innerHTML = '0';
            msTens.innerHTML = '0';
            
            // remove redDigit if in the class
            secondTens.parentElement.classList.remove("redDigit");
            // reset the count to 0
            count = 0;
        },
        increment: function() {
            count++;
            return count;
        },
        secondTensPart: function() {
            return Math.floor((count % 10000) / 1000);
        },
        secondOnesPart: function() {
            return Math.floor((count % 1000) / 100);
        }, 
        mshundredsPart: function() {
            return Math.floor((count % 100) / 10);
        },
        msTensPart: function() {
            return Math.floor(count % 10);
        },
        addClass: function() {
            return digitsParentDiv.classList.add('redDigit');
        },
        endTimer: function() {
            // change color to red
            this.addClass();
            // clearInterval
            window.clearInterval(startCount);
        },
        updateTimer: function() {
            secondTens.innerHTML = this.secondTensPart();
            secondOnes.innerHTML = this.secondOnesPart();
            msHundreds.innerHTML = this.mshundredsPart();
            msTens.innerHTML = this.msTensPart();

            if(this.check()) {
                this.increment();
            }else{
                this.endTimer();
            }
        },
        check: function() {
            return count < 1000;
        },
    };
};

function counting() {
    counter.updateTimer();
}

const counter = timer();
counter.init();
const startCount = window.setInterval(counting, 10);




