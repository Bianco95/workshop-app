import { BusinessOwner } from '../models/businessOwner';
import { Motorcycle } from './motorcycle';
import { Vehicles } from "./vehicles";
import { InputMotorcycle, InputCar, InputVehicle, InputVehicleType } from '..';
import { Car } from './car';

export class WorkShopManager{

    private static instance:WorkShopManager;

    public static getInstance():WorkShopManager{
        if(!WorkShopManager.instance){
            WorkShopManager.instance = new WorkShopManager();
        }

        return WorkShopManager.instance;
    }

    public addVehicles(vehicle:Vehicles[], newVehicle: InputCar | InputMotorcycle ):void {
        switch(newVehicle.type){
            case "moto":
                vehicle.push(new Motorcycle(newVehicle.brand, newVehicle.license))
                break;
            case "car":
                vehicle.push(new Car(newVehicle.brand, newVehicle.license))
                break;
        }
    }

    public removeVehicles(vehicle:Vehicles[], license:string):void {
        
    }

    public setOwner(businessOwner: BusinessOwner, businessOwnertoSet: BusinessOwner):void{
        
    }   
}