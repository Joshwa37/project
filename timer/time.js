console.log(Date());
function update(){
    const now= new Date();
    const hours=now.getHours()
    const minute=now.getMinutes().toString().padStart(2,0);
    const second=now.getSeconds().toString().padStart(2,0);
    const time=`${hours}:${minute}:${second}`;
    document.getElementById("get").textContent=time;
}
update();
setInterval(update,1000);