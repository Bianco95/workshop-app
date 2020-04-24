import { Vehicles } from "./vehicles";
import { InputMotorcycle } from "..";

export class Motorcycle extends Vehicles{

    constructor(protected brand:string, protected license:string){
        super(brand,license)
    }

}