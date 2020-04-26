import { InputCar } from "../models/inputVehicle";
import { AbstractVehicle } from "./vehicle";

export class Car extends AbstractVehicle {

    public steeringWheel: string;
    public wheel : [string, string, string, string];

    constructor(inputCar: InputCar) {
        super(inputCar);
        this.steeringWheel = inputCar.steeringWheel;
        this.wheel = ["wheel1old", "wheel2old", "wheel3old", "wheel4old" ];

    }

}