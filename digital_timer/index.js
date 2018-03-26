let secTens = document.querySelector("#secondTens");
let secOnes = document.querySelector("#secondOnes");
let colon = document.querySelector("#colon");
let msHundreds = document.querySelector("#msHundreds");
let msTens = document.querySelector("#msTens");

function timer() {

    function stopTimer() {
        clearInterval();
    }

    function msTensPlace() {
       
        msTens.innerHTML = 0;
        
        function incMsTens() {
            setInterval(() => {
                while (msTens.innerHTML < 9) {
                    return ++msTens.innerHTML;
                }
            }, 10)
        }
       
        incMsTens();
        msHundredsPlace();

    }



    function msHundredsPlace() {
        msHundreds.innerHTML = 0;

        function incMsHundreds() {
            setInterval(() => {
                while (msHundreds.innerHTML < 9) {
                    return ++msHundreds.innerHTML;
                }
            }, 100)
            }
        incMsHundreds()
    }


    function secOnesPlace() {
        secOnes.innerHTML = 0;

    }


    function secTensPlace() {
        secTens.innerHTML = 0;
    }


    msTensPlace()
}


timer();

 

 