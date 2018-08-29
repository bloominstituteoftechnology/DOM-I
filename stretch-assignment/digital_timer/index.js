
window.onload = function(){
    document.getElementById("msTens").innerHTML = '0';
    let tms = setInterval(function(){
        document.getElementById("msTens").textContent++;
    }, 10);
    setTimeout(function(){clearInterval(tms); }, 90);

    document.getElementById("msHundreds").innerHTML = '0';
    let hms = setInterval(function(){
        document.getElementById("msHundreds").textContent++;
    }, 100);
    setTimeout(function(){clearInterval(hms)}, 900);

    document.getElementById("secondOnes").innerHTML = '0';
    let os = setInterval(function(){
        document.getElementById("secondOnes").textContent++;
    }, 1000);
    setTimeout(function(){clearInterval(os)}, 10000);

    document.getElementById("secondTens").innerHTML = '0';
    let ts = setInterval(function(){
        document.getElementById("secondTens").textContent++;
    }, 10000);
    setTimeout(function(){clearInterval(ts)}, 100000);
}