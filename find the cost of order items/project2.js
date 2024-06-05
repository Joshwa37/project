let items;
let quantity;
document.getElementById("mysubmit").onclick=function(){
    items=document.getElementById("items").value;
    quantity=document.getElementById("quantity").value;
    console.log(items);
    console.log(quantity);
if (items == String("pizza")) {
    quantity=quantity*5.63;
    console.log(quantity);
    document.getElementById("write").textContent=quantity;
}
else if(items==String("burgar")){
    quantity=quantity*8;
    console.log(quantity);
    document.getElementById("write").textContent=quantity;
}
else{
    document.getElementById("write").textContent="there is no items";
}
}