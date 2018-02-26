window.onload = function startTimer() {
    const digitSelector = document.getElementsByClassName('digit');
    const secondTen = digitSelector[0];
    const secondOne = digitSelector[1];
    const msHundred = digitSelector[2]
    const msTen = digitSelector[3];

    (function countSecondsTens(){
        //every 10 seconds increment
        window.setTimeout(increment(), 10000);

        function increment() {
            secondTen.innerHTML = "1";
        }
    }());

    function countSecondsOnes(){
        //every second increment
    }

    function countMsTens(){
        //every 10th of a second increment
    }

    function countMsHundreds(){
        //every 100th of a second increment
        window.setInterval(cb, )
    }

    function endTimer() {
        
    }

};