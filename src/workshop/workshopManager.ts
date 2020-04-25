import { Vehicle } from '../vehicles/vehicle';
import { InputVehicle, InputCar } from '../models/inputVehicle';
import { Car } from '../vehicles/car';

export class WorkShopManager{

    private static instance: WorkShopManager;

    public static getInstance(): WorkShopManager {
        if (!WorkShopManager.instance) {
            WorkShopManager.instance = new WorkShopManager();
        }

        return WorkShopManager.instance;
    }
    
    public addVehicle(vehicles: Vehicle[], inputVehicle: InputVehicle):void{
        switch(inputVehicle.type){
            case "car":
                vehicles.push(new Car(inputVehicle as InputCar));
        }
    }

}