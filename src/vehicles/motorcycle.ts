import { InputMotorcycle } from './../models/inputVehicle';
import { InputCar } from "../models/inputVehicle";
import { AbstractVehicle } from "./vehicle";

export class Motorcycle extends AbstractVehicle {

    public handlebars: string;
    public wheels:string[];

    constructor(InputMotorcycle: InputMotorcycle) {
        super(InputMotorcycle);
    }

    public setWheels(value:string[]){
        value.forEach(wheelElm => {
            this.wheels.push(wheelElm);
        });
    }

    public getWheels():string[]{
        return this.wheels;
    }

    public setHandlebars(value:string){
        this.handlebars = value;
    }

    public getHandlebars():string{
        return this.handlebars;
    }

    
}