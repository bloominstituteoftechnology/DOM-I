

const timer = function() {
    let hasTicked = false;

const tickTock = function() {
    if (hasTicked) {
        if (Number(msTens.innerText) < 9) {
           msTens.innerText = Number(msTens.innerText) + 1;
        } else if (Number(msHundreds.innerText) < 9) {
            msTens.innerText = 0;
            msHundreds.innerText = Number(msHundreds.innerText) + 1;
        } else if (Number(secondOnes.innerText) < 9) {
            msTens.innerText = 0;
            msHundreds.innerText = 0;
            secondOnes.innerText = Number(secondOnes.innerText) + 1;
        } else {
            msTens.innerText = 0;
            msHundreds.innerText = 0;
            secondOnes.innerText = 0;
            secondTens.innerText = Number(secondTens.innerText) + 1;
            clearInterval(newTimer);
            document.querySelector("div.digits").style.color = "red";
        } 
    } else {
        const secondTens = document.querySelector("#secondTens");
        const secondOnes =  document.querySelector("#secondOnes");
        const msHundreds = document.querySelector("#msHundreds");
        const msTens = document.querySelector("#msTens");
        secondTens.innerText = 0;
        secondOnes.innerText = 0;
        msHundreds.innerText = 0;
        msTens.innerText = 1;
    }
hasTicked = true;
}
let newTimer = window.setInterval(tickTock, 10);
}

const buttonE1 = document.createElement("div");
buttonE1.style.display = "block";
buttonE1.style.backgroundColor = "grey";
buttonE1.style.border = "1px solid black";
buttonE1.style.padding = "10px 20px";
buttonE1.style.textAlign = "center";
buttonE1.innerText = "Click Me!";
const digits = document.querySelector(".digits");
digits.appendChild(buttonE1);


buttonE1.onclick = timer;

