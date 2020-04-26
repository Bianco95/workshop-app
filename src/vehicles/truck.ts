import { InputTruck } from './../models/inputVehicle';
import { AbstractVehicle } from "./vehicle";

export class Truck extends AbstractVehicle {

    constructor(protected inputTruck: InputTruck) {
        super(inputTruck);
    }

    public setWheels(value:string[]):void{
        value.forEach(wheelElm => {
            this.inputTruck.wheels.push(wheelElm);
        });
    }

    public getWheels():string[]{
        return this.inputTruck.wheels;
    }
}