const counterBuild = () => {
    let count = 0;

    return function() {
        count++;
        return count;
    }
}

const counter = counterBuild();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());