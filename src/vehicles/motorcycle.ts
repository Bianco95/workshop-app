import { InputMotorcycle } from './../models/inputVehicle';
import { InputCar } from "../models/inputVehicle";
import { AbstractVehicle } from "./vehicle";

export class Motorcycle extends AbstractVehicle {

    public handlebars: string;
    public wheel : [string, string];

    constructor(InputMotorcycle: InputMotorcycle) {
        super(InputMotorcycle);
        this.handlebars = InputMotorcycle.handlebars;
        this.wheel = ["ruota1vecchia", "ruota2vecchia" ];

    }

}