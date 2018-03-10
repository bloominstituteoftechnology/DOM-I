

let count = 0

const timer = setInterval( () => masterFunction(), 10);

const masterFunction = () => {
    ++count;
        if(count % 1000 === 0) {
         
        document.querySelector("#secondTens").innerHTML = `1`;
        }

        if(count % 100 == 0) {
            let newCount = count / 100;
            if(newCount > 9) 
            {
            newCount = 0;
            }
            document.querySelector("#secondOnes").innerHTML = `${newCount}`;
        }

        if(count % 10 == 0) {
            let newCount = count / 10;
            if(newCount > 9) 
            {
            newCount = 0;
            }
            document.querySelector("#msHundreds").innerHTML = `${newCount}`;
        }


}



