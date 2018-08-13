
// setup the elements
const digits = document.querySelector(".digits");
const sT = document.getElementById("secondTens");
const sO = document.getElementById("secondOnes");
const mH = document.getElementById("msHundreds");
const mT = document.getElementById("msTens");
const mO = document.getElementById("msOnes");

// digital timer function
function digitalTimer() {

  // startup function to set all the startup data
  function startUp() {
    let ms = 0;
    sT.innerHTML = "0";
    sO.innerHTML = "0";
    mH.innerHTML = "0";
    mT.innerHTML = "0";
    
    // set a timer interval to this timer interval and add a call to update
    const timerInterval = this.setInterval(() => {
      // increment ms by 10
     ms += 10;

     // if ms hits the end at 10000 ms the finalize the digital timer
     if(ms === 10000) {finalize(timerInterval); } 
     // update timer by ms ammount
     update(ms);
    }, 10); // tick every 10ms
  }

}