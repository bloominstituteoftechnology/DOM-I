const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');

let secTenTime = 0;
let secOneTime = 0;
let msHunTime = 0;
let msTenTime = 0;
const timer = setInterval(function(){
  msTenTime += 1
  secondTens.innerHTML=`${secTenTime}`;
  secondOnes.innerHTML=`${secOneTime}`;
  msHundreds.innerHTML=`${msHunTime}`;
  msTens.innerHTML=`${msTenTime}`;
  
  if (msTenTime == 9){
      msHunTime += 1;
      msTenTime = 0;
      
      if(msHunTime == 6){
        secOneTime += 1; 
        msHunTime = 0;
      if(secOneTime == 10){
          secTenTime += 1;
          secOneTime = 0; 
      }
      if(secTenTime == 1){
        clearInterval(timer);
        secondTens.innerHTML=`1`;
        secondOnes.innerHTML=`0`;
        msHundreds.innerHTML=`0`;
        msTens.innerHTML=`0`;

      }
    } 
  }
}, 10);



