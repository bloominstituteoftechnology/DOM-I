// constants defined to be used form html selectors 
const digits = document.querySelector(".digits");
const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");
const msOnes = document.getElementById("msOnes");

timer(); //calls the function 

function timer() {
    init(); // initialization for the 10ms counter function down to line 27
    function init() {
        let ms = 0;
        secondTens.innerHTML = "0";
        secondOnes.innerHTML = "0";
        msHundreds.innerHTML = "0";
        msTens.innerHTML = "0";

        const timerInterval = window.setInterval(() => { //counter 
            ms += 10;
            if (ms === 10000) {
                endTimer(timerInterval);
            }
            updateTimer(ms);
        }, 10); // ?? why 10 here in the counter again?
    }

    function increment(string) {    //output string nums after incrementing 
        let number = Number(string) + 1;
        return number.toString();
    }

    function endTimer(intervalId) { //timer ender and num red function 
        clearInterval(intervalId); //call clearInterval: interval ID
        Array.from(digits.children).forEach(digit => { //
            digit.classList.add("redDigit");
        })
    }

    function updateTimer(ms) { //global timer, a little complicated bc you have to update all the place holders
        if (ms === 10000) {
            secondTens.innerHTML = "1";
            secondOnes.innerHTML = "0";
            msHundreds.innerHTML = "0";
            msTens.innerHTML = "0";
        } else if (ms % 1000 === 0) {
            secondOnes.innerHTML = increment(secondOnes.innerHTML); //calling the increment function 
            msHundreds.innerHTML = "0";
            msTens.innerHTML = "0";
        } else if (ms % 100 === 0) {
            msHundreds.innerHTML = increment(msHundreds.innerHTML);
            msTens.innerHTML = "0";
        } else {
            msTens.innerHTML = increment(msTens.innerHTML);
        }
    }
}
