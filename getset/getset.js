class measure{
    constructor(hight,width){
        this.hight=hight;
        this.width=width;
    }
    set hight(newhight){
        if(newhight>0){
            this._hight=newhight;
        }
        else{
            console.error("please enter correctly");
        }
    }
    set width(newwidth){
        if(newwidth>0){
            this._width=newwidth;
        }
        else{
            console.error("please enter correctly");
        }
    }
    get width(){
        return this._width;
    }
    get hight(){
        return this._hight;
    }
}
const measure1=new measure(-1222,-1222);
console.log(measure1.width);
console.log(measure1.hight);

