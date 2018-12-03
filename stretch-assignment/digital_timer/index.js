let tensMs = document.getElementById("msTens");
let hundredsMs = document.getElementById("msHundreds");
let oneSeconds = document.getElementById("secondOnes");
let tenSeconds = document.getElementById("secondTens");

let toTen = 0;
let toHundred = 0;
let time = setInterval(timer, 10);

function timer(){
    if(toTen >= 60){
        toTen = 0;
        toHundred ++;
        tensMs.textContent = toTen;
        hundredsMs.textContent = toHundred;
    } else {
        toTen++;
        tensMs.textContent = toTen;
    }
}