const digits = document.getElementsByClassName("digits")[0];

// const timer = setInterval(function() {
//     const secondTens = document.getElementById("secondTens");
//     const secondOnes = document.getElementById("secondOnes");
//     const msTens = document.getElementById("msTens");
//     const msHundreds = document.getElementById("msHundreds");

//     if (secondOnes.textContent === "-") {
//         secondOnes.textContent = 0;
//     }
//     if (secondTens.textContent === "-") {
//         secondTens.textContent = 0;
//     }
//     if (msTens.textContent === "-") {
//         msTens.textContent = 0;
//     }
//     if (msHundreds.textContent === "-") {
//         msHundreds.textContent = 0;
//     }

//     msHundreds.textContent = Number(msHundreds.textContent) + 1;
//     if (msHundreds.textContent == 10) {
//         msHundreds.textContent = 0;
//         msTens.textContent++;
//     }
//     if (msTens.textContent == 10) {
//         msTens.textContent = 0;
//         secondOnes.textContent++;
//     }
//     if (secondOnes.textContent == 10) {
//         secondOnes.textContent = 0;
//         secondTens.textContent++;
//     }

//     if (secondTens.textContent == 1) {
//         clearInterval(timer);
//         const digits = document.getElementsByClassName("digits")[0].style.color = "red";
//     }
// }, 10);

const startBtn = document.querySelector(".start");
startBtn.addEventListener("click", function startTimer() {
    secondTens.textContent = 0;
    secondOnes.textContent = 0;
    msTens.textContent = 0;
    msHundreds.textContent = 0;

    const digits = document.getElementsByClassName("digits")[0].style.color = "black";

    const timer = setInterval(function() {
        var secondTens = document.getElementById("secondTens");
        var secondOnes = document.getElementById("secondOnes");
        var msTens = document.getElementById("msTens");
        var msHundreds = document.getElementById("msHundreds");

        if (secondOnes.textContent === "-") {
            secondOnes.textContent = 0;
        }
        if (secondTens.textContent === "-") {
            secondTens.textContent = 0;
        }
        if (msTens.textContent === "-") {
            msTens.textContent = 0;
        }
        if (msHundreds.textContent === "-") {
            msHundreds.textContent = 0;
        }

        msHundreds.textContent = Number(msHundreds.textContent) + 1;
        if (msHundreds.textContent == 10) {
            msHundreds.textContent = 0;
            msTens.textContent++;
        }
        if (msTens.textContent == 10) {
            msTens.textContent = 0;
            secondOnes.textContent++;
        }
        if (secondOnes.textContent == 10) {
            secondOnes.textContent = 0;
            secondTens.textContent++;
        }

        if (secondTens.textContent == 1) {
            clearInterval(timer);
            const digits = document.getElementsByClassName("digits")[0].style.color = "red";
        }
    }, 10);
});