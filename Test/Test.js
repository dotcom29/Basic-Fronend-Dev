const timeElement = document.getElementById("time")

function gettime(){
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    timeElement.innerHTML = 
    `${hours <10 ? `0${hours}` : hours} : 
    ${minutes <10 ? `0${minutes}` : minutes} : 
    ${seconds <10 ? `0${seconds}` : seconds}`
}
setInterval(gettime, 1000);