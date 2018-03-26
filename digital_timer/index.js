let secTens = document.querySelector("#secondTens");

let secOnes = document.querySelector("#secondOnes");

let col = document.querySelector("#colon");

let miliHundreds = document.querySelector("#msHundreds");

let miliTens = document.querySelector("#msTens");



function a() {
    miliTens.innerHTML = 0;
   let x = setInterval(()=>{
        miliTens.innerHTML++;
        if (miliTens.innerHTML === 9) {
            clearInterval(x);
        }
    }, 100) 
}

a();
