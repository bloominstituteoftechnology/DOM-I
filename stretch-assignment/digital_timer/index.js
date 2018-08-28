// Document variables
const digits = document.getElementsByClassName('digits')[0];

// Update timer function - 10s = 10000ms
const startTimer = function(){
    const startTime = Date.now();
    let isLastUpdate = false;
    return function(){
        let elapsedTime = Date.now() - startTime;

        if(elapsedTime < 10000){
            let ones = Number.parseInt(elapsedTime / 1000);
            let tenths = Number.parseInt((elapsedTime % 1000) / 100);
            let hundredths = Number.parseInt((elapsedTime % 100) / 10);

            digits.children[0].innerHTML = 0;
            digits.children[1].innerHTML = ones;
            digits.children[3].innerHTML = tenths;
            digits.children[4].innerHTML = hundredths;
        }

        else if(!isLastUpdate){
            isLastUpdate = true;
            digits.children[0].innerHTML = 1;
            digits.children[1].innerHTML = 0;
            digits.children[3].innerHTML = 0;
            digits.children[4].innerHTML = 0;
            for(let i = 0; i < digits.children.length; i++){
                digits.children[i].classList.add('redDigit');
            }
        }
    };
}

const updateTimer = startTimer();
setInterval(updateTimer, 10);