let secTens = document.querySelector("#secondTens");
let secOnes = document.querySelector("#secondOnes");
let col = document.querySelector("#colon");
let miliHundreds = document.querySelector("#msHundreds");
let miliTens = document.querySelector("#msTens");




function a() {
    
   let x = setInterval(()=>{
    miliTens.innerHTML = 0;
        while (miliTens.innerHTML <= 8) {
            if(miliTens === 9) {
                miliTens.innerHTML = 0;
            }
            miliTens.innerHTML++;
           
        };
        b();
    }, 100)
}
    function b() {
    let y = setInterval(() => {
        miliHundreds.innerHTML = 0;
        
        while(miliHundreds.innerHTML <= 8) {
            if(miliTens === 9) {
                clearInterval(y);
            }
            miliHundreds.innerHTML++;
        }
    }, 1000)
 }


 a()
 

 