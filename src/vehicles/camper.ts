import { InputCamper } from './../models/inputVehicle';
import { InputCar } from "../models/inputVehicle";
import { AbstractVehicle } from "./vehicle";

export class Camper extends AbstractVehicle {

    constructor(protected inputCamper: InputCamper) {
        super(inputCamper);
    }

    public setWheels(value:string[]):void{
        value.forEach(wheelElm => {
            this.inputCamper.wheels.push(wheelElm);
        });
    }

    public getWheels():string[]{
        return this.inputCamper.wheels;
    }

    public setLenght(value:number):void{
        this.inputCamper.length = value;
    }

    public getLenght():number{
        return this.inputCamper.length;
    }

    public setWidth(value:number):void{
        this.inputCamper.width = value;
    }

    public getWidth():number{
        return this.inputCamper.width;
    }
}