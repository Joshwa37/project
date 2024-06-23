
function random(input){
    let val=Math.floor(Math.random()*3);
    if(val==input){
        window.alert("win");
    }
    else{
        window.alert("loose reload page");
    }
}