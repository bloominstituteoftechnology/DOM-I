
// set all === to 0 

// ten second interval
// setTimeout(
//     function(){ 
//         // .innerHTML = 1 
//      },
//     10000);

// set a one second interval with a break at 10 
let i = 0
let val = setInterval(
        function(){
            i++;
            if(i === 10) {    
                clearInterval(val);
                document.querySelector("#secondOnes").innerHTML = `0`;
                return; 
            } 
            document.querySelector("#secondOnes").innerHTML = `${i}`
              
        }
      
    
      , 1000);


    //   setInterval(function(){
    //     let i = 0; 
    //     while(i<10) {
    //         i++
    //         document.querySelector("#secondOnes").innerHTML = `${i}`
    //     }
    // }, 1000);


  // if( i === 10 ) ;{
        //      clearInterval()
        //         //.innerHTML = 0
        //     }
        // set to innerHTML and stop at 9sec
        // secondOnes





// the reast