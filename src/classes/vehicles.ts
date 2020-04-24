import { Client } from '../models/clients';

export type VehiclesState = "delivery" | "pending_spare" | "pending_mechanical" | "progress"

export interface VehicleI{
    getState() : VehiclesState;
    setState(state : VehiclesState): void;
    getModel() : string;
    getBrand() : string;
    getLicenseplate() : string;
}

export abstract class Vehicles implements VehicleI{

    private state:VehiclesState;
    private client:Client;
    
    constructor(protected brand:string, protected carplate:string, protected model:string){
        
    }
    getModel(): string {
        return this.model;
    }
    getBrand(): string {
        return this.brand;
    }
    getLicenseplate(): string {
        return this.carplate;
    }
    public getState():VehiclesState
    {
        return this.state;
    }

    public setState(value:VehiclesState){
        this.state = value;
    }

    public setClient(value:Client){
        this.client = value;
    }

    public getClient():Client{
        return this.client;
    }
}