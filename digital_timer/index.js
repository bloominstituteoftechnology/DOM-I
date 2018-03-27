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
       msTens.innerHTML = '0';
       msHundreds.innerHTML = '0';
       secOnes.innerHTML = '0';
       secTens.innerHTML = '0';




    //  MsTens Function 
        function msTensPlace() {

            setInterval(() => {
                if (msTens.innerHTML === '0' || msTens.innerHTML % 9 !== '0' && msTens.innerHTML < 9) {
                    msTens.innerHTML++;
                }
                
            }, 10)
            msHundredsPlace();
            
            
        }

    //  MsHundreds Function 
        function msHundredsPlace() {
        
            setInterval(() => {
                if (msTens.innerHTML === '9' && msHundreds.innerHTML === '0' || msHundreds.innerHTML < 9) {
                  msTens.innerHTML = '0';    
                  msHundreds.innerHTML++;
                }
            }, 100)
            
            secOnesPlace();
        }

    //  SecOnes Function 
        function secOnesPlace() {
            setInterval(() => {
                if (msHundreds.innerHTML === '9' && secOnes.innerHTML === '0' || secOnes.innerHTML < 9) {  //NOT NEEDED ' && msTens.innerHTML === '9 '
                    msTens.innerHTML = '0';
                    msHundreds.innerHTML = '0';
                    secOnes.innerHTML++;
                }
            }, 1000)
            secTensPlace()
        }

    // SecTens Function 
        function secTensPlace() {
          let x = setInterval(() => {
                if (secOnes.innerHTML === '9' && secTens.innerHTML === '0' || secTens.innerHTML < 1) {
                    msTens.innerHTML = '0';
                    msHundreds.innerHTML = '0';
                    secOnes.innerHTML = '0';
                    secTens.innerHTML++;
                }
                else stopTimer();
            }, 10000)

            
        }

msTensPlace();
}

// timer();

 

 