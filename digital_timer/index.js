const digits = document.getElementsByClassName('digits');

//  set each id as it's own variable
const secondTens = document.getElementById("secondTens");
console.log(secondTens);

const secondOnes = document.getElementById("secondOnes");
console.log(secondOnes);

const msHundreds = document.getElementById("msHundreds");
console.log(msHundreds);

const msTens = document.getElementById("msTens");
console.log(msTens);

let count = 0;

const timeChks = () => {
    count++;
    return count;
}; 

var timer = window.setInterval(timeChks(), 1000);
console.log(timer);


