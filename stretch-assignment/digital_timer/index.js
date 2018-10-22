

const timer= {
    ms : 0,
    mst: 0,
    sec: 0,
    sect: 0,
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
        document.querySelector("#msTens").textContent = timer.ms;
        document.querySelector("#msHundreds").textContent = timer.mst;
        document.querySelector("#secondOnes").textContent = timer.sec;
        document.querySelector("#secondTens").textContent = timer.sect;
        
    }, 10);
}

timing();