const Time=document.getElementsByClassName(`saa`);
printtime();
function printtime(){
    let d= new Date();
    let hours= d.getHours();
    let min=d.getMinutes();
    let sec= d.getSeconds();//console.log(Time)
    min=zero(min);hours=zero(hours);sec=zero(sec);
    Time[0].textContent=hours;
    Time[1].textContent=min;
    Time[2].textContent=sec;
}
setInterval(printtime,1000);//there is also setTimeout() occur once.
function zero(sec){
    sec=sec.toString();//console.log(sec.length);
    if(sec.length<2) return "0"+sec;
    else return sec;
}
    