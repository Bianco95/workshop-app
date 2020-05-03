import { Request, Response } from "express";
import Car from '../schema/carSchema';
import { AbstractRouter } from "./abstractRouter";
import Workshop, { WorkshopDocument } from "../schema/workshopSchema";
import { CarDocument } from '../schema/carSchema';
import { Strategies } from '../strategies/strategies';

export class CatRouter extends AbstractRouter {

    constructor() {
        super();
    }

    protected defaultListen(): void {
        this.router.post("/createCar", (req, res) => this.createCar(req, res));
        this.router.post("/insertCar", (req, res) => this.insertCar(req, res));
        this.router.put("/changeWheel", (req, res) => this.applyChangeWheelbyLicense(req, res));
        this.router.put("/changeSteeringWheel", (req, res) => this.applyChangeSteeringWheelbyLicense(req, res));
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

    private async applyChangeWheelbyLicense(req: Request, res: Response): Promise<void> {
        try {
            const workshopID: string = req.body.workshopID;

            const workshop: WorkshopDocument = await Workshop.findById(workshopID).exec();
            if (workshop === null) {
                throw new Error("resource not found");
            }

            const licensePlate: string = req.body.licensePlate;

            let vehicleIdx: number = workshop.vehicles.findIndex(vehicleElm => vehicleElm.licensePlate === licensePlate);

            if(vehicleIdx === null){
                throw new Error("resource not found");
            }

            Strategies.getInstance().changeWheel(workshop, vehicleIdx);

            await Workshop.findByIdAndUpdate(workshopID, workshop).exec();

            res.status(201).json(workshop.toJSON());

        } catch (err) {

            if (err.message === "resource not found") {
                this.sendResourceNotFound(res);
            } else {
                this.sendInternalServerError(res);
            }
        }
    }

    private async applyChangeSteeringWheelbyLicense(req: Request, res: Response): Promise<void> {
        try {
            const workshops: WorkshopDocument[] = await Workshop.find({}).exec();
            if (workshops === null) {
                throw new Error("resource not found");
            }

            const licensePlate: string = req.body.licensePlate;
            const steeringWheel: string = req.body.steeringWheel;

            let vehicleIdx: number = 0;
            let workshopToModify: WorkshopDocument;

            workshops.forEach(workshopElm => {
                vehicleIdx = workshopElm.vehicles.findIndex(vehicleElm => vehicleElm.licensePlate === licensePlate);
                if(vehicleIdx !== null){
                    workshopToModify = workshopElm;
                }
            });

            if(vehicleIdx === null){
                throw new Error("resource not found");
            }

            Strategies.getInstance().changeSteeringWheel(workshopToModify, vehicleIdx, steeringWheel);

            await Workshop.findByIdAndUpdate(workshopToModify._id, workshopToModify).exec();

            res.status(201).json(workshopToModify.toJSON());

        } catch (err) {

            if (err.message === "resource not found") {
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

    printError(arg0: string, err: any) {
    }
    showInternalError(res: any) {
    }
}