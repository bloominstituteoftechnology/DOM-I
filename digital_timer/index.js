let counter = 0;
let increm = 0;
let msT = document.getElementById('msTens');
let msH = document.getElementById('msHundreds');
let scO = document.getElementById('secondOnes');
let scT = document.getElementById('secondTens');


function timer(){

  msT.innerHTML= 0;
  msH.innerHTML = 0;
  scO.innerHTML = 0;
  scT.innerHTML = 0;
  scT.innerHTML = 0;


  let timer = setInterval(function(){
      msH.remove();
      msT.innerHTML = counter;
      ++counter;
      if (counter === 100){
        counter= 0;
      }
    },10);

  let timer2 = setInterval(()=>{
    scO.innerHTML = increm;
    increm++;
    if(increm === 11){
      scT.remove();
      increm = 0;
    clearInterval(timer2);
     clearInterval(timer); //can't set multiple clearIntervals?

    }
  },1000)
}
timer();



//
// if counter = 10000 { color red};
//
// for (counter = 0; conter <= 10000; counter++)
//     if 10000%10 === 0
//     digits[4] ++between 0-9  // msTens updates every 10ms secs.
//
//     if 10000%100 === 0
//     digits[3] ++between 0-9// msHundreds updates every 100ms.
//
//     if 10000%1000 === 0
//     digits[1] ++between 0-9 // every 1000ms
//
//     if 10000%10000 === 0
//     digits[0] 1 and loop stops // every 10000ms]
