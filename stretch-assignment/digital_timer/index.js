const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');

let msTensCounter = 0;
let msHundredsCounter = 0;
let secondOnesCounter = 0;
let secondTensCounter = 0;


function msOnesIncrement(){
    msTensCounter++;

    if(msTensCounter > 9){
        msTens.textContent = 0;
        msTensCounter = 0;
        hsHundredsIncrement();
    }else{
        msTens.textContent = msTensCounter;
    }
}

function hsHundredsIncrement(){
    msHundredsCounter++;

    if(msHundredsCounter > 9){
        msHundreds.textContent = 0;
        msHundredsCounter = 0;
        sOnesIncrement();
    }else{
        msHundreds.textContent = msHundredsCounter;
    }
}

function sOnesIncrement(){
    secondOnesCounter++;

    if(secondOnesCounter > 9) {
        secondOnes.textContent = 0;
        secondOnesCounter = 0;
        sTensIncrement();
    }else{
        secondOnes.textContent = secondOnesCounter;
    }

}

function sTensIncrement(){
    secondTensCounter++;
    secondTens.textContent = secondTensCounter;


    window.clearInterval(intervalID);

    const digits = document.querySelector('.digits').children;
    Array.from(digits).forEach((digitDiv) =>{
        digitDiv.classList.add('redDigit');
    });
}

let intervalID;
intervalID = window.setInterval(msOnesIncrement, 10);



/* <div class="digits">
    <div class="digit" id="secondTens">-</div>
    <div class="digit" id="secondOnes">-</div>
    <div class="digit" id="colon">:</div>
    <div class="digit" id="msHundreds">-</div>
    <div class="digit" id="msTens">-</div>
</div> */