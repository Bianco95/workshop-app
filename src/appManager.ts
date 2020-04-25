import { InputVehicle } from './models/inputVehicle';
import { Vehicle } from './vehicles/vehicle';
import { Workshop } from './workshop/workshop';
import { Client } from './models/client';

export interface ResultType {
    workshopname: string;
    vehicles: InputVehicle[];
}

export interface ResultType1 {
    workshopname: string;
    numvehicles: number;
}

export class AppManager {

    private static instance: AppManager;

    private workshops: Workshop[];
    private clients: Client[];

    constructor(protected name: string) {
        this.workshops = [];
        this.clients = [];
    }

    public static getInstance(): AppManager {

        if (!AppManager.instance) {
            AppManager.instance = new AppManager(this.name);
        }
        return AppManager.instance;
    }

    public addClients(client: Client): void {
        this.clients.push(client);
    }

    public addWorkshop(workshop: Workshop): void {
        this.workshops.push(workshop);
    }

    public getUsersVehicle(name: string, lastname: string, email: string): InputVehicle[] {
        let found = this.clients.find(clientElm => clientElm.name === name && clientElm.lastname === lastname && clientElm.email === email);
        if (found === undefined) {
            throw new Error("user not founded");
        }
        return found.vehicles;
    }

    public getUsersVehicleWorkshop(name: string, lastname: string, email: string, quantity?: boolean, businessOwnerusername?: string): ResultType[] | ResultType1[] {

        let uservehicle: InputVehicle[] = [];
        let result: ResultType[] | ResultType1[] = []

        let found = this.clients.find(clientElm => clientElm.name === name && clientElm.lastname === lastname && clientElm.email === email);

        if (found === undefined) {
            throw new Error("user not founded");
        }

        this.workshops.forEach(workshopElm => {
            uservehicle = workshopElm.getVehicles().reduce((accumulator, currentValue) => {
                let find: InputVehicle;
                if (businessOwnerusername !== undefined) {
                    find = found.vehicles.find(vehicleElm => vehicleElm.licence_plate === currentValue.getLicensePlate() && workshopElm.getBusinessOwner().username === businessOwnerusername);
                } else {
                    find = found.vehicles.find(vehicleElm => vehicleElm.licence_plate === currentValue.getLicensePlate());
                }
                if (find !== undefined) {
                    accumulator.push(find);
                }
                return accumulator;
            }, []);

            if (!quantity) {
                if (uservehicle.length !== 0) {
                    (result as ResultType[]).push({
                        workshopname: workshopElm.getName(),
                        vehicles: uservehicle
                    })
                }
            } else {
                if (uservehicle.length !== 0) {
                    (result as ResultType1[]).push({
                        workshopname: workshopElm.getName(),
                        numvehicles: uservehicle.length
                    })
                }
            }
        });

        return result;
    }

    public getVehiclePendingSpareOfOwner(usernameOwner:string):number{

        let valuetoreturn = 0;

        this.workshops.filter(workshopElm => workshopElm.getBusinessOwner().username === usernameOwner)
        .forEach(filterworkshopElm =>{
            valuetoreturn = filterworkshopElm.getVehicles().filter(vehicleElm => vehicleElm.getState() === "pending_spare").length;
        })

        return valuetoreturn;

    }
}