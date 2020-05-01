import { Request, Response } from "express";
import Car from '../schema/carSchema';
import { AbstractRouter } from "./abstractRouter";
import Workshop, { WorkshopDocument } from "../schema/workshopSchema";
import { ChangeWheel } from '../vehicles/operationStrategies/changewheel';
import { CarDocument } from '../schema/carSchema';

export class CatRouter extends AbstractRouter {

    constructor() {
        super();
    }

    protected defaultListen(): void {
        this.router.post("/createCar", (req, res) => this.createCar(req, res));
        this.router.post("/insertCar", (req, res) => this.insertCar(req, res));
        this.router.post("/changeWheel", (req, res) => this.applyStrategybyLicense(req, res));
    }

    private async insertCar(req: Request, res: Response): Promise<void> {
        try {

            const workshopID: string = req.body.workshopID;

            const workshop: WorkshopDocument = await Workshop.findById(workshopID).exec();
            if (workshop === null) {
                throw new Error("workshop not found");
            }

            const newCar = new Car(req.body.car);

            workshop.vehicles.push(newCar);

            workshop.save()

            res.status(200).json(workshop.toJSON());
        } catch (err) {
            console.error(err);
            if (err.message === "workshop not found") {
                this.sendResourceNotFound(res);
            } else {
                this.sendInternalServerError(res);
            }
        }
    }

    private async applyStrategybyLicense(req: Request, res: Response): Promise<void> {
        try {
            const workshopID: string = req.body.workshopID;

            const workshop: WorkshopDocument = await Workshop.findById(workshopID).exec();
            if (workshop === null) {
                throw new Error("workshop not found");
            }

            const licensePlate: string = req.body.licensePlate;

            let vehicleIdx: number = workshop.vehicles.findIndex(vehicleElm => vehicleElm.licensePlate === licensePlate);

            this.changeWheel(workshop, vehicleIdx);

            workshop.save()

            res.status(200).json(workshop.toJSON());

        } catch (err) {

            console.error(err);
            if (err.message === "workshop not found") {
                this.sendResourceNotFound(res);
            } else {
                this.sendInternalServerError(res);
            }
        }
    }

    private async createCar(req: Request, res: Response): Promise<void> {
        try {

            const newCar = new Car(req.body);
            await newCar.save();

            res.status(201).json({
                licensePlate: newCar.licensePlate.toString(),
                message: "Successfully created"
            });
        } catch (err) {
            this.printError("createUser", err);
            this.showInternalError(res);
        }
    }


    private async changeWheel(workshop: WorkshopDocument, vehicleIdx): Promise<WorkshopDocument> {
        try {
            for (let i = 0; i < (workshop.vehicles[vehicleIdx] as CarDocument).wheels.length; i++) {
                (workshop.vehicles[vehicleIdx] as CarDocument).wheels[i] = "wheel" + i + "new";
            }

            return workshop;

        } catch (err) {
            this.printError("some error occurred", err);
        }
    }

    printError(arg0: string, err: any) {
    }
    showInternalError(res: any) {
    }
}