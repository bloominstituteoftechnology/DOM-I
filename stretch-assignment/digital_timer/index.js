let secondTens = document.getElementById('secondTens');
let secondOnes = document.getElementById('secondOnes');
let msTens = document.getElementById('msTens');
let msHundreds = document.getElementById('msHundreds');
let msT = 0;
let msH = 0;
let seconds = 0;
let secondT = 0;

timer();

function timer() {
    t = setTimeout(add, 10);
}

function add(){    
    if(msT < 9){
        msT++;
    }
    else{
        msT = 0;
        if(msH < 9){
            msH++;
        }else{
            msH = 0;
            if(seconds < 9){
                seconds++;
            }else{
                seconds = 0;
                if(secondT < 9){
                   secondT++;
                   if(secondT === 1){
                       msTens.textContent = msT;
                       msHundreds.textContent = msH;
                       secondOnes.textContent = seconds;
                       secondTens.textContent = secondT;
                       return;
                   }
                }
            }
        }
    }

    msTens.textContent = msT;
    msHundreds.textContent = msH;
    secondOnes.textContent = seconds;
    secondTens.textContent = secondT;
    timer();
}