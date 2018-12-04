let tensMs = document.getElementById("msTens");
let hundredsMs = document.getElementById("msHundreds");
let oneSeconds = document.getElementById("secondOnes");
let tenSeconds = document.getElementById("secondTens");
const digits = document.querySelector(".digits");

let toTenms = 0;
let toHundredms = 0;
let toTens = 0;
let toHundreds = 0;
let time = setInterval(timer, 10);

function timer(){
    if(toTenms >= 9){
        toTenms = 0;
        toHundredms ++;
        tensMs.textContent = toTenms;
        hundredsMs.textContent = toHundredms;
        if(toHundredms >= 10){
            toHundredms = 0;
            toTens++;
            oneSeconds.textContent = toTens;
            if(toTens >= 10){
                toTens = 0;
                toHundredms = 0;
                toHundreds++;
                hundredsMs.textContent = toHundredms;
                oneSeconds.textContent = toTens;
                tenSeconds.textContent = toHundreds;                
                clearInterval(time);
                digits.style.color = "red";
            }
        }
    } else {
        toTenms++;
        tensMs.textContent = toTenms;
    }
}