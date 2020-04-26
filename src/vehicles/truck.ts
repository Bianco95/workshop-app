import { InputTruck } from './../models/inputVehicle';
import { AbstractVehicle } from "./vehicle";

export class Truck extends AbstractVehicle {

    public wheel : [string, string, string, string, string?, string?];

    constructor(inputCar: InputTruck) {
        super(inputCar);
        this.wheel = ["wheel1old", "wheel2old", "wheel3old", "wheel4old"];
    }

}