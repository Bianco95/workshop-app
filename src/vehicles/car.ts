import { InputCar } from "../models/inputVehicle";
import { AbstractVehicle } from "./vehicle";

export class Car extends AbstractVehicle {


    constructor(protected inputCar: InputCar) {
        super(inputCar);
    }

    public setWheels(value:string[]):void{
        value.forEach(wheelElm => {
            this.inputCar.wheels.push(wheelElm);
        });
    }

    public getWheels():string[]{
        return this.inputCar.wheels;
    }

    public setSteeringWheel(value:string):void{
        this.inputCar.steeringWheel = value;
    }

    public getLenght():string{
        return this.inputCar.steeringWheel;
    }


}