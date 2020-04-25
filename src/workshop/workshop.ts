
import { BusinessOwner } from "../models/ businessOwner";
import { Vehicle } from "../vehicles/vehicle";
import { WorkShopManager } from "./workshopManager";


export class Workshop {

    private businessOwner: BusinessOwner;
    private vehicles: Vehicle[];
    private workshopManger : WorkShopManager;

    constructor() {
        this.vehicles = [];
        this.workshopManger = WorkShopManager.getInstance();
    }

    public setBusinessOwner():void{

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