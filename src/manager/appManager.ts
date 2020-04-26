import { InputVehicle } from "../models/inputVehicle";
import { Workshop } from "../workshop/workshop";
import { Client } from "../models/client";
import { Vehicle } from "../vehicles/vehicle";


export interface ResultType {
    workshopName: string;
    vehicles: InputVehicle[] | number;
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

    public getUsersVehicleWorkshop(name: string, lastname: string, email: string, quantity?: boolean, businessOwnerUsername?: string): ResultType[]  {

        let uservehicle: InputVehicle[] = [];
        let result: ResultType[] = []

        let found = this.clients.find(clientElm => clientElm.name === name && clientElm.lastname === lastname && clientElm.email === email);

        if (found === undefined) {
            throw new Error("user not founded");
        }

        this.workshops.forEach(workshopElm => {
            uservehicle = workshopElm.getVehicles().reduce((accumulator, currentValue) => {
                let find: InputVehicle;
                if (businessOwnerUsername !== undefined) {
                    find = found.vehicles.find(vehicleElm => vehicleElm.licence_plate === currentValue.getLicensePlate() && workshopElm.getBusinessOwner().username === businessOwnerUsername);
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
                    result.push({
                        workshopName: workshopElm.getName(),
                        vehicles: uservehicle
                    })
                }
            } else {
                if (uservehicle.length !== 0) {
                    result.push({
                        workshopName: workshopElm.getName(),
                        vehicles: uservehicle.length
                    })
                }
            }
        });

        return result;
    }

    public getVehicleByLicense(licensePlate:string){

        let find: Vehicle;
        let result: ResultType1[] = []
        let numOfVehicles:number = 0;

        this.workshops.forEach(workshopElm => {
            find = workshopElm.getVehicles().find(vehicleElm => vehicleElm.getLicensePlate().startsWith(licensePlate,0));
            numOfVehicles = workshopElm.getVehicles().filter(vehicleElm => vehicleElm.getLicensePlate().startsWith(licensePlate,0)).length;
            if(find !== undefined){
                result.push({
                    workshopname : workshopElm.getName(),
                    numvehicles  : numOfVehicles,
                })
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