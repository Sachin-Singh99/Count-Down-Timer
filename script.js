const endDate = "28 September 2023 10:00 PM"

document.getElementById("end-date").innerText=endDate;
const inputs = document.querySelectorAll("input")
const clock=()=>{
    const end=new Date(endDate)
    const now=new Date()
    const diff=(end-now)/1000;

    if(diff<0) return;
    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor(diff/3600)%24;
    inputs[2].value = Math.floor(diff/60)%60;
    inputs[3].value = Math.floor(diff)%60;
}
//setInterval(clock,1000);
setInterval(
    ()=>{
        clock()
    },1000
)

/* 
* 1 day = 24 hour
* 1 hour = 60 minute
* 1 minute = 60 second
*/