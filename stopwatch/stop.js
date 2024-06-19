let display=document.getElementById("get");
let timer=null;
let starttime=0;
let elapsedtime=0;
let isrunning=false;

function start(){
    if(!isrunning){
        starttime=new Date()-elapsedtime;
        timer=setInterval(update,10);
        isrunning=true;
    }
}
function reset(){
    clearInterval(timer);
    const starttime=0;
    const elapsedtime=0;
    const isrunning=false;
    display.textContent="00:00:00:00";

}
function stop(){
    if(isrunning){
        clearInterval(timer);
        elapsedtime=Date.now()-starttime;
        isrunning=false;
    }

}
function update(){
    let currenttime=new Date();
    elapsedtime=currenttime-starttime;
    let hour=Math.floor(elapsedtime/(1000*60*60));
    let minute=Math.floor(elapsedtime/(1000*60)%60);
    let second=Math.floor(elapsedtime/1000%60);
    let millisecond=Math.floor(elapsedtime % 1000/10);
    hour=String(hour).padStart(2,"0");
    minute=String(minute).padStart(2,"0");
    second=String(second).padStart(2,"0");
    millisecond=String(millisecond).padStart(2,"0");

    display.textContent=`${hour}:${minute}:${second}:${millisecond}`;
}