import { InputCar } from "../models/inputVehicle";
import { AbstractVehicle } from "./vehicle";

export class Car extends AbstractVehicle {

    public volante: string;
    public wheel : [string, string, string, string];

    constructor(inputCar: InputCar) {
        super(inputCar);
        this.volante = inputCar.volante;
        this.wheel = ["ruota1vecchia", "ruota2vecchia", "ruota3vecchia", "ruota4vecchia" ];

    }

}