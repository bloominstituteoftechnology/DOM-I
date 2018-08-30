
window.onload = function(){
    document.getElementById("msTens").innerHTML = '0';
    let tms = setInterval(function(){
        if (document.getElementById("msTens").innerHTML < 9) {
        document.getElementById("msTens").textContent++;
        } else {
        document.getElementById("msTens").innerHTML = '0';}
    }, 10);
    
    

    document.getElementById("msHundreds").innerHTML = '0';
    let hms = setInterval(function(){
        if (document.getElementById("msHundreds").innerHTML < 9) {
        document.getElementById("msHundreds").textContent++;
        } else {
        document.getElementById("msHundreds").innerHTML = '0';}
    }, 100);
    

    document.getElementById("secondOnes").innerHTML = '0';
    let os = setInterval(function(){
        if (document.getElementById("secondOnes").innerHTML < 10) {
        document.getElementById("secondOnes").textContent++;
        } else {
        document.getElementById("secondOnes").innerHTML = '0';}
    }, 1000);
    

    // document.getElementById("secondTens").innerHTML = '0';
    // let ts = setInterval(function(){
    //     if (document.getElementById("secondTens").innerHTML <= 1) {
    //     document.getElementById("secondTens").textContent++;
    //     } else {
    //     document.getElementById("secondTens").innerHTML = '0';}
    // }, 10);
    
}