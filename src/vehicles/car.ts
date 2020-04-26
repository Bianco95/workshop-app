import { InputCar } from "../models/inputVehicle";
import { AbstractVehicle } from "./vehicle";

export class Car extends AbstractVehicle {

    public steeringWheel: string;
    public wheels: string[];

    constructor(inputCar: InputCar) {
        super(inputCar);
    }

    public setWheels(value:string[]){
        value.forEach(wheelElm => {
            this.wheels.push(wheelElm);
        });
    }

    public getWheels():string[]{
        return this.wheels;
    }

    public setSteeringWheel(value:string){
        this.steeringWheel = value;
    }

    public getLenght():string{
        return this.steeringWheel;
    }

}