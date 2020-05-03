import { WorkshopDocument } from "../schema/workshopSchema";
import { CarDocument } from "../schema/carSchema";

export class Strategies{

    public static instance:Strategies;

    public static getInstance():Strategies{
        if(!Strategies.instance){
            Strategies.instance = new Strategies();
        }

        return Strategies.instance;
    }

    public async changeWheel(workshop: WorkshopDocument, vehicleIdx): Promise<WorkshopDocument> {

        try {
            for (let i = 0; i < (workshop.vehicles[vehicleIdx] as CarDocument).wheels.length; i++) {
                (workshop.vehicles[vehicleIdx] as CarDocument).wheels[i] = "wheel" + i + "new";
            }
            (workshop.vehicles[vehicleIdx] as CarDocument).state = "delivery";
            return workshop;
        } catch (err) {
            return err;
        }
    }

    public async changeSteeringWheel(workshop: WorkshopDocument, vehicleIdx: number, steeringWheel:string): Promise<WorkshopDocument> {

        try {
            (workshop.vehicles[vehicleIdx] as CarDocument).steeringWheel = steeringWheel;
            (workshop.vehicles[vehicleIdx] as CarDocument).state = "delivery";
        } catch (err) {
            return err;
        }
    }



}