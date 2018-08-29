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
    msTens.textContent = msTensCounter;

    if(msTensCounter === 9){
        msTensCounter = 0;
        hsHundredsIncrement();
    }
}

function hsHundredsIncrement(){
    msHundredsCounter++;
    msHundreds.textContent = msHundredsCounter;

    if(msHundredsCounter === 9){
        msHundredsCounter = 0;
        sOnesIncrement();
    }
}

function sOnesIncrement(){
    secondOnesCounter++;
    secondOnes.textContent = secondOnesCounter;

    if(secondOnesCounter === 9) {
        secondOnesCounter = 0;
        sTensIncrement();
    }
}

function sTensIncrement(){
    secondTensCounter++;
    secondTens.textContent = secondTensCounter;


    window.clearInterval(intervalID);

    const digits = document.querySelector('.digits').children;
    Array.from(digits).forEach((digitDiv) =>{
        digitDiv.classList.add('redDigit');
        if(digitDiv.id !== 'secondTens' && digitDiv.id !== 'colon'){
            digitDiv.textContent = 0;
        }
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