window.onload = function startTimer() {
    const digitSelector = document.getElementsByClassName('digit');
    const secondTen = digitSelector[0];
    const secondOne = digitSelector[1];
    const colon = digitSelector[2];
    const msHundred = digitSelector[4]
    const msTen = digitSelector[3];

    (function init(){
        msTen.innerHTML = "0";
        msHundred.innerHTML = "0";
        secondOne.innerHTML = "0";
        secondTen.innerHTML = "0";
    }());

    let myInt = function() {
        if (msHundred.innerHTML === "9") {
            msHundred.innerHTML = "0";
            incrementMsTens();
        } else msHundred.innerHTML = ++msHundred.innerHTML;
    };

    var go = setInterval( function(){ myInt()}, 10);

    function incrementMsTens(){
        if(msTen.innerHTML === "9") {
            msTen.innerHTML = "0";
            incrementSecondsOnes();
        } else msTen.innerHTML = ++msTen.innerHTML;
        //every 10th second increment
    }

    function incrementSecondsOnes(){
        //every second increment
        if(secondOne.innerHTML === "9") {
            secondOne.innerHTML = "0";
            incrementSecondsTens();
        } else secondOne.innerHTML = ++secondOne.innerHTML;
    }

    function incrementSecondsTens(){
        //every 10 seconds increment
        secondTen.innerHTML = "1";
        clearInterval(go);
        msHundred.style.color = "red";
        msTen.style.color = "red";
        secondTen.style.color = "red";
        secondOne.style.color = "red";
        colon.style.color = "red";
    }
};