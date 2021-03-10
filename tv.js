class Tv{
    constructor(brand)
    {
      this.brand=brand;
      this.channel=20;
      this.volume=10;
    }
    increaseVolume(vol){
        if(vol+this.volume<=100)
        this.volume=this.volume+vol;
        
    }
    decreaseVolume(vol){
        if(this.volume-vol>1)
        this.volume=this.volume-vol;
        
    }
    setchannel(ch){
        if(ch>0 && ch<100)
           this.channel=ch;
    }
    display(){
        console.log("Brand : "+this.brand);
        console.log("Current volume : "+this.volume);
        console.log("Current channel : "+this.channel);  
      }
    reset(){
        this.channel=20;
        this.volume=10;
    }
}
let tv1=new Tv("Sony");
tv1.setchannel(45);
tv1.decreaseVolume(23);
tv1.display();
let tv2=new Tv("Samsung");
tv2.setchannel(34);
tv2.increaseVolume(23);
tv2.display();
tv2.reset();
tv2.display();

