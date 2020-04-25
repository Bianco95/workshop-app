import { BusinessOwner } from './../models/ businessOwner';
import { Vehicle } from "../vehicles/vehicle";
import { WorkShopManager } from "./workshopManager";
import { AppManager } from "../appManager";


export class Workshop {
 
    private businessOwner: BusinessOwner;
    private vehicles: Vehicle[];
    private workshopManger : WorkShopManager;

    constructor(protected name:string) {
        this.vehicles = [];
        this.workshopManger = WorkShopManager.getInstance();
        AppManager.getInstance().addWorkshop(this);
    }

    public getName():string{
        return this.name;
    }

    public setBusinessOwner(value:BusinessOwner):void{
        this.businessOwner = value;
    }
    public getBusinessOwner():BusinessOwner{
        return this.businessOwner;
    }

    public getWorkshopManager():WorkShopManager{
        return this.workshopManger;
    }
    public setWorkshopManager(value:WorkShopManager):void{
        this.workshopManger = value;
    }
    
    public getVehicles(): Vehicle[]{
        return this.vehicles;
    }
}