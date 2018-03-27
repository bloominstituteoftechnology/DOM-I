let secTens = document.querySelector("#secondTens");
let secOnes = document.querySelector("#secondOnes");
let colon = document.querySelector("#colon");
let msHundreds = document.querySelector("#msHundreds");
let msTens = document.querySelector("#msTens");



// let secTens = document.getElementById("secondTens");
// let secOnes = document.getElementById("#secondOnes");
// let colon = document.getElementById("colon");
// let msHundreds = document.getElementById("msHundreds");
// let msTens = document.getElementById("msTens");


function timer() {

    function stopTimer() {
        
        clearInterval(x);
    }
// Initialized digits   
    msTens.innerHTML = 0;
    msHundreds.innerHTML = 0;
    secOnes.innerHTML = 0;
    secTens.innerHTML = 0;


//  MsTens Function 
    function msTensPlace() {
        function incMsTens() {
            setInterval(() => {
                while (msTens.innerHTML < 9) {
                     ++msTens.innerHTML;
                }
            }, 10)
        }

        incMsTens();
        msHundredsPlace();
    }

//  MsHundreds Function 
    function msHundredsPlace() {
        function incMsHundreds() {
            setInterval(() => {
                while (msHundreds.innerHTML < 1) {
                     ++msHundreds.innerHTML;
                }
            }, 100)
            }

        incMsHundreds();
        secOnesPlace();
    }

//  SecOnes Function 
    function secOnesPlace() {
    
        
        function incSecOnes() {
            setInterval(() => {
                while(secOnes.innerHTML < 9) {
                    secOnes.innerHTML++;
                }
            }, 1000)

        }
        incSecOnes();
        secTensPlace();
    }

// SecTens Function 
    function secTensPlace() {
        
        let x = setInterval(() => {
            while(secTens.innerHTML < 1) {
                secTens.innerHTML++;
            }
        }, 10000)
       stopTimer();
    }
    msTensPlace();
}


timer();

 

 