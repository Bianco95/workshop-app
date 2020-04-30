import { Request, Response } from "express";
import { Query } from "mongoose";
import { threadId } from "worker_threads";
import Car from '../schema/carSchema';
import { AbstractRouter } from "./abstractRouter";
import { CarDocument } from '../schema/carSchema';

export class CatRouter extends AbstractRouter {

    constructor() {
        super();
    }

    protected defaultListen(): void {
        this.router.post("/createCar", (req, res) => this.createCar(req, res));
        this.router.get("/", (req, res) => this.getCar(req, res));
    }

    private async getCar(req: Request, res: Response): Promise<void> {

        try {

            let requestedPage: number = req.query.page ? parseInt(req.query.page as string) : 1;
            if (requestedPage <= 0) {
                requestedPage = 1;
            }

            const query: Query<CarDocument[]> = Car.find({});
            const countQuery: Query<CarDocument[]> = Car.find({});

            const numberOfCar: number = await countQuery.count().exec();

            const totalNumberOfPages: number = Math.ceil(numberOfCar / this.ITEMS_PER_PAGE);
            if (requestedPage > totalNumberOfPages && totalNumberOfPages > 0) {
                requestedPage = totalNumberOfPages;
            }

            const cars: CarDocument[] = await query
                .skip((requestedPage - 1) * this.ITEMS_PER_PAGE)
                .limit(this.ITEMS_PER_PAGE)
                .exec();

            res.status(200).json({
                cars: cars,
                page: requestedPage,
                pages: totalNumberOfPages
            });

        } catch (err) {
            this.printError("getAllCars", err);
            this.showInternalError(res);
        }

    }


    private async createCar(req: Request, res: Response): Promise<void> {
        try {
            // create new cat with data in body
            const newCar = new Car(req.body);
            await newCar.save();

            // object created, send confirmation and the created id
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