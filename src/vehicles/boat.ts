import { InputBoats } from './../models/inputVehicle';
import { AbstractVehicle } from "./vehicle";

export class Boat extends AbstractVehicle {

    private sailBoat: boolean;

    constructor(protected inputBoats: InputBoats) {
        super(inputBoats);
    }

    public getLenght():number{
        return this.inputBoats.lenght;
    }
    public setLenght(value:number):void{
        this.inputBoats.lenght = value;
    }

    public getWidth():number{
        return this.inputBoats.width;
    }
    public setWidth(value:number):void{
        this.inputBoats.width = value;
    }

    public getHeight():number{
        return this.inputBoats.width;
    }
    public setHeight(value:number):void{
        this.inputBoats.height = value;
    }

    public getSailBoat():boolean{
        return this.inputBoats.sailBoat;
    }
    public setSailBoat(value:boolean):void{
        this.inputBoats.sailBoat = value;
    }
    

}