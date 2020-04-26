import { InputCamper } from './../models/inputVehicle';
import { InputCar } from "../models/inputVehicle";
import { AbstractVehicle } from "./vehicle";

export class Camper extends AbstractVehicle {

    private length: number;
    private width: number;
    private wheels:string[];

    constructor(InputCamper: InputCamper) {
        super(InputCamper);
    }

    public setWheels(value:string[]){
        value.forEach(wheelElm => {
            this.wheels.push(wheelElm);
        });
    }

    public getWheels():string[]{
        return this.wheels;
    }

    public setLenght(value:number){
        this.length = value;
    }

    public getLenght():number{
        return this.length;
    }

    public setWidth(value:number){
        this.width = value;
    }

    public getWidth():number{
        return this.width;
    }
}