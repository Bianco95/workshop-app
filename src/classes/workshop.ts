import { BusinessOwner } from './../models/businessOwner';
import { Vehicles } from "./vehicles";
import { WorkShopManager } from "./workshopManager";

export class WorkShop{

    private vehicles:Vehicles[];
    private workshopManager:WorkShopManager;
    private businessOwner: BusinessOwner;

    constructor(protected name:string){
        this.vehicles = [];
        this.workshopManager = WorkShopManager.getInstance();
    }

    public getManager():WorkShopManager{
        return this.workshopManager;
    }

    public getVehicles():Vehicles[]{
        return this.vehicles;
    }

    public getBusinessOwner():BusinessOwner{
        return this.businessOwner;
    }
    
    public setBusinessOwner(value:BusinessOwner):void{
        this.businessOwner = value;
    }

}