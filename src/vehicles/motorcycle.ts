import { InputMotorcycle } from './../models/inputVehicle';
import { InputCar } from "../models/inputVehicle";
import { AbstractVehicle } from "./vehicle";

export class Motorcycle extends AbstractVehicle {

    constructor(protected inputMotorcycle: InputMotorcycle) {
        super(inputMotorcycle);
    }

    public setWheels(value:string[]):void{
        value.forEach(wheelElm => {
            this.inputMotorcycle.wheels.push(wheelElm);
        });
    }

    public getWheels():string[]{
        return this.inputMotorcycle.wheels;
    }

    public setHandlebars(value:string):void{
        this.inputMotorcycle.handlebars = value;
    }

    public getHandlebars():string{
        return this.inputMotorcycle.handlebars;
    }

    
}