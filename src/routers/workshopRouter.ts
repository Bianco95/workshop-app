import { Request, Response } from "express";
import { Query, Model } from "mongoose";
import { threadId } from "worker_threads";
import Car from '../schema/carSchema';
import { AbstractRouter } from "./abstractRouter";
import { CarDocument } from '../schema/carSchema';
import Workshop, { WorkshopDocument } from '../schema/workshopSchema';

export class WorkshopRouter extends AbstractRouter {

    constructor() {
        super();
    }

    protected defaultListen(): void {
        this.router.post("/createWorkshop", (req, res) => this.createWorkshop(req, res));
        this.router.get("/", (req, res) => this.getWorkshop(req, res));
        this.router.get("/:id", (req, res) => this.findWorkshopByID(req, res));
    }

    private async findWorkshopByID(req: Request, res: Response): Promise<void> {
        try {

            const workshopModel: Model<WorkshopDocument> = res.locals.models.workshopModel;

            const requestedId: string = req.params.id;

            const workshop: WorkshopDocument = await workshopModel.findById(requestedId).exec();
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
            // create new cat with data in body
            const newWorkshop = new Workshop(req.body);
            await newWorkshop.save();

            // object created, send confirmation and the created id
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