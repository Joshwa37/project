const key=document.getElementById("mybox");
let movement=10;
let x=0;
let y=0;
document.addEventListener("keydown",event=>{
    event.preventDefault();
    switch(event.key){
        case "ArrowUp":
            y-=movement;
        case "ArrowDown":
            y+=movement;
        case "ArrowLeft":
            x-=movement;
        case "ArrowRight":
            x+=movement            
    }
    key.style.left=`${x}px`;
    key.style.top=`${y}px`;

    console.log(event.key);
})
    
