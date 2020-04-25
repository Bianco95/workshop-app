import { InputCar } from './../../models/inputVehicle';
import { Vehicle } from './../vehicle';
import { OperationStrategy } from './operationStrategy';
import { Car } from '../car';

export class ChangeWheel implements OperationStrategy{

    private name:string;

    constructor(){
        this.name = "ChangeWheel";
    }

    execute(vehicle: Vehicle) {
        for(let i = 0; i < (vehicle as Car).wheel.length; i++){
            (vehicle as Car).wheel[i] = (vehicle as Car).wheel[i].substring(0, 6) + 'nuova'
        }
    }
    
    public getName():string{
        return this.name;
    }

}