import { InputVehicle } from "../models/inputVehicle";
import { OperationStrategy } from "./operationStrategies/operationStrategy";

export type VehicleState = "delivery" | "pending_spare" | "pending_worker" | "progress";

export interface Vehicle {
    getState(): VehicleState;
    setState(state: VehicleState): void;
    getLicensePlate(): string;
    getBrand(): string;
    getModel(): string;
    setApplicablesStrategies(strategies: OperationStrategy[]): void;
    applyStrategy(strategyName: string):void;
    /*
    ...
    */
}

export abstract class AbstractVehicle implements Vehicle {

    protected state: VehicleState;
    protected licensePlate: string;
    protected brand: string;
    protected model: string;

    protected applicablesStrategies: OperationStrategy[];

    constructor(input: InputVehicle) {
        this.brand = input.brand;
        this.model = input.model;
        this.licensePlate = input.licence_plate;
        this.state = "pending_worker";
    }

    public getState(): VehicleState {
        return this.state;
    }

    public setState(state: VehicleState): void {
        this.state = state;
    }

    public getLicensePlate(): string {
        return this.licensePlate;
    }

    public getBrand(): string {
        return this.brand;
    }

    public getModel(): string {
        return this.model;
    }

    public setApplicablesStrategies(strategies: OperationStrategy[]): void {
        this.applicablesStrategies = strategies;
    }
    
    public applyStrategy(strategyName: string): void {
        const found = this.applicablesStrategies.find(strategy=>strategy.getName() === strategyName);
        if(!found){
            throw new Error("Strategy not applicable");
        }
        found.execute(this);
    }

}