const secondTens = document.getElementById('secondTens');
console.log(secondTens);
const secondOnes = document.getElementById('secondOnes');
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');

msTens.style.color = 'blue';
msHundreds.style.color = 'green';
secondOnes.style.color = 'purple';

function counterFunction() {
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

counterFunction();
