const secondTensDiv = document.getElementById('secondTens');
const secondOnesDiv = document.getElementById('secondOnes');
const msHundredsDiv = document.getElementById('msHundreds');
const msTensDiv = document.getElementById('msTens');
const toggleText = document.getElementById('toggleText');
const splitList = document.querySelector('#split ul');

let myTimer;
let stopped = true;
let resetActive = true;

let secondTensHolder = 0;
let secondOnesHolder = 0;
let msHundredsHolder = 0;
let msTensHolder = 0;

function startStop() {
    //looks like button is clicking
    startStopButton.style.top = '5px';
    startStopButton.style.right = '5px';
    startStopButton.style.height = '5px';

    setTimeout(function () {
        startStopButton.style.top = '0';
        startStopButton.style.right = '0';
        startStopButton.style.height = '15px';
    }, 100);

    if (stopped) {
        stopped = false;
        myTimer = setInterval(counterLogic, 10);
        function counterLogic() {
            ++msTensHolder;
            if (msTensHolder > 9) {
                msTensHolder = 0;
                ++msHundredsHolder;
            }
            if (msHundredsHolder > 9) {
                msHundredsHolder = 0;
                ++secondOnesHolder;
            }
            if (secondOnesHolder > 9) {
                secondOnesHolder = 0;
                ++secondTensHolder;
            }
            if (secondTensHolder === 6) {
                clearInterval(myTimer);
            }
            secondTensDiv.innerText = secondTensHolder;
            secondOnesDiv.innerText = secondOnesHolder;
            msHundredsDiv.innerText = msHundredsHolder;
            msTensDiv.innerText = msTensHolder;
        }
    } else {
        stopped = true;
        clearInterval(myTimer);
        secondTensDiv.innerText = secondTensHolder;
        secondOnesDiv.innerText = secondOnesHolder;
        msHundredsDiv.innerText = msHundredsHolder;
        msTensDiv.innerText = msTensHolder;
    }
}

function action(){
    if(resetActive){
        reset();
    } else {
        split();
    }
}

function reset() {
    //looks like button is clicking
    resetButton.style.top = '5px';
    resetButton.style.left = '5px';
    resetButton.style.height = '5px';

    setTimeout(function () {
        resetButton.style.top = '0';
        resetButton.style.left = '0';
        resetButton.style.height = '15px';
    }, 100);

    stopped = true;
    clearInterval(myTimer);
    secondTensDiv.innerText = '-';
    secondOnesDiv.innerText = '-';
    msHundredsDiv.innerText = '-';
    msTensDiv.innerText = '-';
    secondTensHolder = 0;
    secondOnesHolder = 0;
    msHundredsHolder = 0;
    msTensHolder = 0;

    splitList.innerHTML = '';
}

function split() {
    resetButton.style.top = '5px';
    resetButton.style.left = '5px';
    resetButton.style.height = '5px';

    setTimeout(function () {
        resetButton.style.top = '0';
        resetButton.style.left = '0';
        resetButton.style.height = '15px';
    }, 100);
    const newSplit = document.createElement('li')
    newSplit.innerHTML = `${secondTensHolder}${secondOnesHolder}:${msHundredsHolder}${msTensHolder}`;
    splitList.appendChild(newSplit);
}

function toggle() {
    middleButtonTop.style.top = '-95px';
    middleButtonBase.style.top = '-45px';

    setTimeout(function () {
        middleButtonTop.style.top = '-100px';
        middleButtonBase.style.top = '-50px';
    }, 100);

    if(resetActive){
        resetActive = false;
        toggleText.innerText = 'Split';
    } else {
        resetActive = true;
        toggleText.innerText = 'Reset';
    }
}

const startStopButton = document.getElementById('right');
const resetButton = document.getElementById('left');
const middleButtonTop = document.getElementById('middle-top');
const middleButtonBase = document.getElementById('middle');
startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', action);
middleButtonTop.addEventListener('click', toggle);
middleButtonBase.addEventListener('click', toggle);
