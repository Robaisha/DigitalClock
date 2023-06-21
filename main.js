let dateTime=document.querySelector('p')
setInterval(() => {
    displayTime()
}, 1000);
const displayTime=()=>{
    dateTime.innerText=null;
    let date=new Date
    let time=date.toLocaleTimeString()
    dateTime.innerText=time
}