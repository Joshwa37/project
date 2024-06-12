function genepass(length,inclulower,incluupper,incluesymbol,inclunum){
    const lowercase="qwertyuiopasdfghjklzxcvbnm";
    const uppercase="QWERTYUIOPASDFGHJKLZXCVBNM";
    const numder="1234567890";
    const symbol="!@#$%^&*()-=_+{}[]|\:;,./<>?";
    let allowchar="";
    let password="";
    allowchar+=inclulower ? lowercase : "";
    allowchar+=incluupper ? uppercase : "";
    allowchar+=incluesymbol ? symbol : "";
    allowchar+=inclunum ?   numder: "";
    for(i=0;i<=length;i++){
        let value=Math.floor(Math.random()*allowchar.length);
        password+=allowchar[value];
        console.log(password);
    }
}
let length=12;
let inclulower=true;
let incluupper=true;
let incluesymbol=true;
let inclunum=true;
genepass(length,inclulower,incluupper,incluesymbol,inclunum);
