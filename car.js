class Car{
    constructor(brand,model){
        this.brand=brand;
        this.model=model
        this.speed=0;
    }
    accelerate(acc){
        this.speed=this.speed+acc;
    
    }
    break(acc){
        if(this.speed-acc>0)
        this.speed=this.speed-acc;
        else
            this.speed=0;
    }
    stop(){
        this.speed=0;
    }
    statusdisplay()
    {
        console.log("brand and model : "+this.brand+" "+this.model);
        console.log("speed : "+this.speed);
        if(this.speed>0)
        console.log("status : running");
        else
        console.log("status : stop");

    }
}
let car1=new Car("Hondacity","Amaze");
car1.accelerate(23);
car1.break(12);
car1.statusdisplay();
let car2=new Car("Maruthi","Scross");
car2.accelerate(10);
car2.break(2);
car2.statusdisplay();
car2.stop();
car2.statusdisplay();
