

const timer= {
    ms : 0,
    mst: 0,
    sec: 0,
    sect: 0,
}

function displayTxt(){
    document.querySelector("#msTens").textContent = timer.ms;
    document.querySelector("#msHundreds").textContent = timer.mst;
    document.querySelector("#secondOnes").textContent = timer.sec;
    document.querySelector("#secondTens").textContent = timer.sect;
}

let mything ;
function timing(){
    mything = setInterval(function(){ 
        if(timer.ms <9){
            timer.ms += 1;
        }else if(timer.mst <9){
            timer.ms = 0;
            timer.mst += 1;
        }else if(timer.sec < 9){
            timer.ms = 0;
            timer.mst = 0;
            timer.sec += 1;
        }else if(timer.sect <9){
            timer.ms = 0;
            timer.mst = 0;
            timer.sec = 0;
            timer.sect += 1;

            let arr = Array.from(document.querySelectorAll("div"));
            arr.forEach(function(item){item.classList.add("redDigit");});

            clearInterval(mything);
        }
        displayTxt();
        
    }, 10);
}

let startBtn = document.querySelector(".start");
startBtn.onclick = function(){ timing(); }

let resetBtn = document.querySelector(".reset");
resetBtn.onclick = function(){
    clearInterval(mything);
    timer.ms = 0;
    timer.mst = 0;
    timer.sec = 0;
    timer.sect = 0;
    displayTxt();
    let arr = Array.from(document.querySelectorAll("div"));
        arr.forEach(function(item){item.classList.remove("redDigit");});
    }