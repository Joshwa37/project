let enter=document.getElementById("temp").value;
let check=document.getElementById("check");
let check1=document.getElementById("check1");
let write=document.getElementById("text");
function fahtocel(enter){
    result=5/9*(enter-32);
    return result;
}
function celtofah(enter){
    result=9/5*(enter+32);
    return result;
}
document.getElementById("click").onclick=function(){
if(check.checked){
    let value=fahtocel(enter);
    write.textContent=value;
}
else if(check1.checked){
    let value=celtofah(enter);
    write.textContent=value;
}
else{
    write.textContent="please select anything";
}
}