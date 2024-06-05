let x=0;
document.getElementById("but").onclick = function(){
    x=x+1;
    document.getElementById("count").textContent = x; 
}
document.getElementById("but1").onclick = function(){
    document.getElementById("count").textContent = 0;
    x=0;
}
document.getElementById("but2").onclick = function(){
    x=x-1
    document.getElementById("count").textContent = x;
}