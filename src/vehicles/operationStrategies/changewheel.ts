import { InputCar } from './../../models/inputVehicle';
import { Vehicle } from './../vehicle';
import { OperationStrategy } from './operationStrategy';
import { Car } from '../car';

export class ChangeWheel implements OperationStrategy{

    // get e set per le ruote


    private name:string;

    constructor(){
        this.name = "ChangeWheel";
    }

    execute(vehicle: Vehicle) {
        for(let i = 0; i < (vehicle as Car).getWheels().length; i++){
            (vehicle as Car).getWheels()[i] = (vehicle as Car).getWheels()[i].substring(0, 6) + 'new'
        }
        // alternative
        /*
        for(let i = 0; i < (vehicle as Car).getWheels().length; i++){
            (vehicle as Car).getWheels()[i] = "wheel"+i+"new";
        }
        */
    }
    
    public getName():string{
        return this.name;
    }

}