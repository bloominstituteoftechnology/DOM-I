let secondTens = document.querySelector('#secondTens');
let secondOnes = document.querySelector('#secondOnes');
let msHundreds = document.querySelector('#msHundreds');
let msTens = document.querySelector('#msTens');
 let secTenTime = 0;
let secOneTime = 0;
let msHunTime = 0;
let msTenTime = 0;

const timer = setInterval(function(){
  msTenTime += 1
  secondTens.textContent=`${secTenTime}`;
  secondOnes.textContent=`${secOneTime}`;
  msHundreds.textContent=`${msHunTime}`;
  msTens.textContent=`${msTenTime}`;
  
  if (msTenTime == 9){
      msHunTime += 1;
      msTenTime = 0;
      
      if(msHunTime == 6){
        secOneTime += 1; 
        msHunTime = 0;
      }
      if(secOneTime == 10){
          secTenTime += 1;
          secOneTime = 0; 
      }
      if(secTenTime == 1){
        secondTens.textContent =1;
        secondOnes.textContent =0;
        msHundreds.textContent =0;
        msTens.textContent=0;
        
        clearInterval(timer);
       }

    } 
    console.log(secondTens.classList);
        secondTens.classList.add=("redDigit");
        secondOnes.classList.add=("redDigit");
        msHundreds.classList.add=("redDigit");
        msTens.classList.add=("redDigit");
}, 10);
