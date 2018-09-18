const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');

const startStopButton = document.getElementById('right');
startStopButton.addEventListener('click', counterFunction);

function counterFunction() {
    startStopButton.style.top = '5px';
    startStopButton.style.right = '5px';
    startStopButton.style.height = '5px';

    let buttonAnimation = setTimeout(function() {
        startStopButton.style.top = '0';
    startStopButton.style.right = '0';
    startStopButton.style.height = '15px';
    }, 100);

    let secondTensHolder = 0;
    let secondOnesHolder = 0;
    let msHundredsHolder = 0;
    let msTensHolder = 0;
    let counter = setInterval(counterLogic, 10);

    function counterLogic() {
        ++msTensHolder;
        if(msTensHolder > 9){
            msTensHolder = 0;
            ++msHundredsHolder;
        }
        if(msHundredsHolder > 9){
            msHundredsHolder = 0;
            ++secondOnesHolder;
        }
        if(secondOnesHolder > 9){
            secondOnesHolder = 0;
            ++secondTensHolder;
        }
        if(secondTensHolder === 1){
            clearInterval(counter);
        }
        secondTens.innerText = secondTensHolder;
        secondOnes.innerText = secondOnesHolder;
        msHundreds.innerText = msHundredsHolder;
        msTens.innerText = msTensHolder;
    }
}
