
let secondTens = document.getElementById("secondTens");
let secondOnes = document.getElementById("secondOnes");
let msHundreds = document.getElementById("msHundreds");
let msTens = document.getElementById("msTens");

function timer() {

    let intervalID = setInterval(updateTimer, 10);

    function init() {
        secondTens.innerHTML = 0;
        secondOnes.innerHTML = 0;
        msHundreds.innherHTML = 0;
        msTens.innerHTML = 0;
    };

    function increment () {
        
    };

    function endTimer() {
        clearInterval(intervalID)
    };

    function updateTimer () {
        let tenSeconds = 0;
        let oneSeconds = 0;
        let millHundreds = 0;
        let millTens = 0;
        millTens += 1;
        if (millTens > 99) {
            millHundreds += 1;
            millTens = 0;
        }
        if (millHundreds > 999) {
            oneSeconds += 1;
            millHundreds = 0;
        }
        if (oneSeconds > 9) {
            tenSeconds += 1;
        }
        msTens.innerHTML = millTens;
        msHundreds.innerHTML = millHundreds;
        secondOnes.innerHTML = oneSeconds;
        secondTens.innerHTML = tenSeconds;
    };
    
    init();
    intervalID();
};

timer();




 



























function newFunction() {
    return document.getElementById("secondTens");
}

return "1" + "1";