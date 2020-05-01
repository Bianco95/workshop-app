import { Request, Response } from "express";
import { Query, Model } from "mongoose";
import { AbstractRouter } from "./abstractRouter";
import Workshop, { WorkshopDocument } from '../schema/workshopSchema';
import { ResultType, ResultType1 } from '../manager/appManager';


export class WorkshopRouter extends AbstractRouter {

    constructor() {
        super();
    }

    protected defaultListen(): void {
        this.router.post("/createWorkshop", (req, res) => this.createWorkshop(req, res));
        this.router.get("/", (req, res) => this.getWorkshop(req, res));
        this.router.get("/:id", (req, res) => this.findWorkshopByID(req, res));
        this.router.post("/filterByLicense", (req, res) => this.filterByLicense(req, res))
    }

    private async filterByLicense(req: Request, res: Response): Promise<void> {
        try {

            const workshop = await Workshop.find({}).exec();

            if (workshop === null) {
                throw new Error("no car with this license has been found");
            }

            let result: ResultType[] = []
            let vehicles = [];

            workshop.forEach(workshopElm => {
                workshopElm.vehicles.reduce((accumulator, currentValue) => {
                    let find = workshopElm.vehicles.filter(vehicleElm => vehicleElm.licensePlate.startsWith(req.body.licensePlate));
                    if (find !== undefined) {
                        accumulator.push(find);
                    }
                    accumulator = vehicles;
                    return accumulator;
                }, []);
                result.push({
                    workshopName: workshopElm.name,
                    vehicles: vehicles
                })
                vehicles = [];
            });
            
            res.status(200).json(result);
            
        }catch(err){
            console.error(err);
            if (err.message === "no car with this license has been found") {
                this.sendResourceNotFound(res);
            } else {
                this.sendInternalServerError(res);
            }
        }
    }

    private async findWorkshopByID(req: Request, res: Response): Promise<void> {
        try {
            const requestedId: string = req.params.id;

            const workshop: WorkshopDocument = await Workshop.findById(requestedId).exec();
            if (workshop === null) {
                throw new Error("workshop not found");
            }

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

    private async getWorkshop(req: Request, res: Response): Promise<void> {

        try {

            let requestedPage: number = req.query.page ? parseInt(req.query.page as string) : 1;
            if (requestedPage <= 0) {
                requestedPage = 1;
            }

            const query: Query<WorkshopDocument[]> = Workshop.find({});
            const countQuery: Query<WorkshopDocument[]> = Workshop.find({});

            const requestedName: string = req.query.name ? (req.query.name as string) : null;
            if (requestedName !== null) {
                query.where('name', requestedName)
                countQuery.where('name', requestedName)
            }

            const numberOfWorkshop: number = await countQuery.count().exec();

            const totalNumberOfPages: number = Math.ceil(numberOfWorkshop / this.ITEMS_PER_PAGE);
            if (requestedPage > totalNumberOfPages && totalNumberOfPages > 0) {
                requestedPage = totalNumberOfPages;
            }

            const workshops: WorkshopDocument[] = await query
                .skip((requestedPage - 1) * this.ITEMS_PER_PAGE)
                .limit(this.ITEMS_PER_PAGE)
                .exec();

            res.status(200).json({
                workshops: workshops,
                page: requestedPage,
                pages: totalNumberOfPages
            });

        } catch (err) {
            this.printError("getAllCars", err);
            this.showInternalError(res);
        }

    }

    private async createWorkshop(req: Request, res: Response): Promise<void> {
        try {

            const newWorkshop = new Workshop(req.body);
            await newWorkshop.save();

            res.status(201).json({
                workshopName: newWorkshop.name.toString(),
                message: "Successfully created"
            });
        } catch (err) {
            this.printError("createWorkshop", err);
            this.showInternalError(res);
        }
    }

    printError(arg0: string, err: any) {
    }

    showInternalError(res: any) {
    }


}