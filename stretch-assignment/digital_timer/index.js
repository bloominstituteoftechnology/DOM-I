const Time = 10;
const SecondTens = document.querySelector("#secondTens");
const SecondOnes = document.querySelector("#secondOnes");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");
SecondTens.textContent = 0;
SecondOnes.textContent = 0;
msHundreds.textContent = 0;
msTens.textContent = 0;
SecondOnesCounter = 0;
SecondTensCounter = 0;


   
    if(SecondOnesCounter <9){
        setInterval(function(){ SecondTens.textContent = SecondTensCounter++},10000);
    setInterval(function(){SecondOnesCounter +=1; SecondOnes.textContent = SecondOnesCounter},1000);
    }else if (SecondTensCounter === 1){
        setInterval(function(){ SecondTens.textContent = SecondTensCounter++},10000);
        SecondOnes.textContent = 0;

    }
    



    // setInterval(function(){ SecondTens.textContent = SecondTensCounter++},10000);