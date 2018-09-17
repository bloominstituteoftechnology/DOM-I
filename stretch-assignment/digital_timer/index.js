


let secondTens = document.getElementById('secondTens');
let secondOnes = document.getElementById('secondOnes');
let msHundreds = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');

secondTens.innerText=0;
secondOnes.innerText=0;
msHundreds.innerText=0;
msTens.innerText=0;

let initialZero = 0;
let initialMsZero = 0;
setInterval(()=>{

    let currentDigit = secondOnes.innerText;
    let nextDigit = parseInt(secondOnes.innerText)+1

    if(initialZero===1)
    {
        secondTens.innerText=0;
        secondOnes.innerText=0;
        msHundreds.innerText=0;
        msTens.innerText=0;
        initialZero=0;
    }


    if(nextDigit === 10)
    {
        currentDigit = 0;
        nextDigit = 0;
        initialZero++;
    }
    secondOnes.innerText=nextDigit;
    secondTens.innerText=initialZero;


  
},1000);

setInterval(()=>{

    let currentDigit = msTens.innerText;
    let nextDigit = parseInt(msTens.innerText)+1

    if(nextDigit === 10)
    {
        currentDigit = 0;
        nextDigit = 0;
        initialMsZero++;
    }
    if(initialMsZero === 10)
    {
        initialMsZero = 0;
    }

    msTens.innerText = nextDigit;
    msHundreds.innerText=initialMsZero;

  
},10);