var sec = 0;
    function pad ( val ) { return val > 9 ? val : "0" + val; }
    setInterval( function(){
        document.getElementById("msTens").innerHTML=pad(sec/100,0);
        // document.getElementById("msHundreds").innerHTML=pad(++sec%10);
        // document.getElementById("secondOnes").innerHTML=pad(sec/10,1);
        document.getElementById("secondOnes").innerHTML=pad(++sec%1);
        
    }, 100);

    var myVar = setInterval(setColor, 1000);
 
    function setColor() {
      var x = document.body;
      x.style.backgroundColor = x.style.backgroundColor == "red" ? "white" : "red";
    }

    function stopColor() {
        clearInterval(myVar);
      }

      function startColor() {
        startInterval(myVar);
      }