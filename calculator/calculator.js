const display=document.getElementById("display");
function appenddisplay(input){
    display.value+=input;
}
function clear(){
    display.value = "";
}
function calculate(){
    display.value=eval(display.value);
}
