import { Vehicle } from './../vehicle';
export interface OperationStrategy{
    getName():string;
    execute(vehicle:Vehicle);
}