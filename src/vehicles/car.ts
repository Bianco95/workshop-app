import { InputCar } from "../models/inputVehicle";
import { AbstractVehicle } from "./vehicle";

export class Car extends AbstractVehicle {

    public volante: string;

    constructor(inputCar: InputCar) {
        super(inputCar);
        this.volante = inputCar.volante;
    }

}