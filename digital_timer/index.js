// Rachelle Pestanas & Brett Sullivan

// const interval = setInterval(function(){}, 5000)

// class Clock {

//     constructor(value){
//         this.value = value;
//         this.children = [];
//     }

    

//     msTens(value) {
//         document.getElementById("secondTens")
//         this.children.push(new Clock(value));

//     }

//     msHundreds() {

//     }


// }

// const myClock = new Clock(1);

// setInterval()

const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");

function timer() {
    secondTens.innerHTML = "0";
    secondOnes.innerHTML = "0";
    msHundreds.innerHTML = "0";
    msTens.innerHTML = "0";

        // Initial Interval To Increment msTens
        
        function msTensCount(msTensCounter){
             msTensCounter = 0;
             while(msTensCounter < 10){
                msTensCounter++;
                msTens.innerHTML = msTensCounter.toString();
             }

            //  if(msTensCounter === 9){
            //      msTensCounter = 0;
            //  }

           
        };      
        
        setInterval(msTensCount, 10);


        // Timeout activates the msHundreds Interval after 10ms

        function msHundredsCount(msHundredsCounter){
            msHundredsCounter = 1;
            
            while(msHundredsCounter < 10){
                ++msHundredsCounter;
                msHundreds.innerHTML = msHundredsCounter.toString();
          
            }
        };

        setTimeout(setInterval(msHundredsCount, 100), 10);

        // // Timeout activates the secondOnes interval after 100ms

        function secondOnesCount(secondOnesCounter){
            secondOnesCounter = 0;
            while(secondOnesCounter < 10){
                ++secondOnesCounter;
                secondOnesCount.innerHTML = secondOnesCounter.toString();
            }
        };

        setTimeout(setInterval(secondOnesCount, 100), 100);

        // // Timeout activates the secondTens interval after 1000ms

        function secondTensCount(secondTensCounter){
            secondTensCounter = 1;
            while(secondTensCounter <= 10){
                ++secondTensCounter;
                secondTensCount.innerHTML = secondTensCounter.toString();
            }
        };

        setTimeout(setInterval(secondTensCount, 1000), 1000);

        // if(secondTens.innerHTML === "10"){
            
        // }
    

    // function init () {
    //     secondTens.innerHTML = "0";
    //     secondOnes.innerHTML = "0";
    //     msHundreds.innerHTML = "0";
    //     msTens.innerHTML = "0";

    // }

    // function increment () {


    // }

    // function endTimer () {
    //   if(msTen.innerHTML === "10"){
    //     init();
    //     msTens.innerHTML = "1";
    //   }
    // }

    // function updateTimer() {

    // }
}


 timer();