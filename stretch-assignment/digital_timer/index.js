
const secTens = document.querySelector('#secondTens')
function count (){
    counter = 0
    return counter++
}
setInterval(()=>{
    count(), 1000
})