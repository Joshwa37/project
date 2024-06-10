const minnum=1;
const maxnum=100;
answer=Math.floor(Math.random()*(maxnum-minnum +1)+minnum);
console.log(answer);
let attempt;
let train=true;
while(train){
let guess=window.prompt("enter");
attempt++;
if(guess==answer){
    window.alert(`you are correct at ${attempt} attempt`);
    train=false;
}
else if(guess<answer){
    window.alert("too low");
}
else if(guess>answer){
    window.alert("too high");
}
else{
    console.log("erroe");
}
}

