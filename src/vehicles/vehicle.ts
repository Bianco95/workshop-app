import { InputVehicle } from "../models/inputVehicle";

export type VehicleState = "delivery" | "pending_spare" | "pending_worker" | "progress";

export interface Vehicle {
    getState(): VehicleState;
    setState(state: VehicleState): void;
    getLicensePlate(): string;
    getBrand(): string;
    getModel(): string;
    /*
    ...
    */
}

export abstract class AbstractVehicle implements Vehicle {

    protected state: VehicleState;
    protected licensePlate: string;
    protected brand: string;
    protected model: string;

    constructor(input: InputVehicle) {
        this.brand = input.brand;
        this.model = input.model;
        this.licensePlate = input.licence_plate;
        this.state = "pending_worker";
    }

    getState(): VehicleState {
        return this.state;
    }

    setState(state: VehicleState): void {
        this.state = state;
    }

    getLicensePlate(): string {
        return this.licensePlate;
    }

    getBrand(): string {
        return this.brand;
    }

    getModel(): string {
        return this.model;
    }

}