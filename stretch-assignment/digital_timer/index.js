
window.addEventListener('load', (foo) => {
    


    document.getElementById('button-start').onclick = function() {
        document.getElementById('button-start').disabled = true;
        const craziness = document.querySelector('.digits')
        
        if (document.querySelector('.digits').classList.contains('redDigit')) {
            document.querySelector('.digits').classList.remove('redDigit');
        }
        
        let secondTens = document.getElementById("secondTens");
        let secondOnes = document.getElementById("secondOnes"); 
        let msHundreds = document.getElementById("msHundreds");
        let msTens = document.getElementById("msTens");

        let msTensVal = 0;
        let msHundredsVal = 0;
        let secondOnesVal = 0;
        let secondTensVal = 0;
        
        let counter = setInterval(function() {

            
            ++msTensVal;
            if (msTensVal === 10) {
                msTensVal = 0;
                ++msHundredsVal;
            }

            if (msHundredsVal === 10) {
                msHundredsVal = 0;
                ++secondOnesVal;
            }

            if (secondOnesVal === 10) {
                secondOnesVal = 0;
                ++secondTensVal;
            }

            msTens.textContent = msTensVal;
            msHundreds.textContent = msHundredsVal;
            secondOnes.textContent = secondOnesVal;
            secondTens.textContent = secondTensVal;

            if (secondTensVal === 1) {
                let digits = document.querySelector(".digits");
                digits = digits.style.color = "red"
                clearInterval(counter);
                document.getElementById('button-start').disabled = false;
                craziness.style.transform = "scale(1.5)"
                

            }
        }, 10)
    }
})