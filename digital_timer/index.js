

//individual ids, called by getElementById
 const indDigit1 = document.getElementById("secondTens");
 indDigit1.style.color = 'red';
 const indDigit2 = document.getElementById("secondOnes");
 indDigit2.style.color = 'blue';
 const indDigit3 = document.getElementById("colon");
 indDigit3.style.color = 'red';
 //Next ids called by querySelector
 const indDigit4 = document.querySelector("#msHundreds");
 indDigit4.style.color = 'blue';
 const indDigit5 = document.querySelector("#msTens");
 indDigit5.style.color = 'red';
 //quearySelectorAll fails to set style...
//  const indDigit5 = document.querySelectorAll("#msTens");
//  indDigit5.style.color = 'red';



 //class digits, fails to set style
 const digitContainer = document.getElementsByClassName("digits");

let msTinterv;
let secTinterv;

// setInterval(function(){ indDigit1.innerHTML = msTinterv++ }, 10000);
//  setInterval(function(){ indDigit2.innerHTML = msTinterv++ }, 1000);
 
 
//  setInterval(function(){ indDigit3.innerHTML = msTinterv++ }, 100);
//  setInterval(function(){ indDigit4.innerHTML = msTinterv++ }, 100);
function digitFunction() {
    
    if (msTinterv >= 1000 ) {
        terminate();
    } else {
        // indDigit2.innerHTML = 0;
        ++msTinterv
        // terminate()
    }
    
        
            // console.log('100ms');
            
            
            if (msTinterv < 10) {
                indDigit5.innerHTML = msTinterv;
            }
            if (msTinterv % 10 === 0  ) {
                indDigit4.innerHTML = msTinterv;
            }
            if (msTinterv <= 1000) {
                if (msTinterv === 1000) {
                    indDigit2.innerHTML = 0;
                    indDigit1.innerHTML = msTinterv / 1000
                } else  {
                    indDigit1.innerHTML = 0;
                indDigit2.innerHTML = msTinterv / 100;
                }
            }
        
        
    

  
}
 function count() { msTinterv = setInterval(function(){ digitFunction() }, 10) };
 function terminate() {
     clearInterval(msTinterv)
 }
 count()
 // 1000 = 10sec
 // 100 == 1sec
 // 10 = .1 sec
 // 1 == .01sec