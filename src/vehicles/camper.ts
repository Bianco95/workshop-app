import { InputCamper } from './../models/inputVehicle';
import { InputCar } from "../models/inputVehicle";
import { AbstractVehicle } from "./vehicle";

export class Camper extends AbstractVehicle {

    public length: number;
    public wheel : [string, string, string, string];

    constructor(InputCamper: InputCamper) {
        super(InputCamper);
        this.length = InputCamper.length;
        this.wheel = ["wheel1old", "wheel2old", "wheel3old", "wheel4old" ];

    }

}