import { Request, Response } from "express";
import { Query } from "mongoose";
import { threadId } from "worker_threads";
import { AbstractRouter } from "./abstractRouter";
import { BusinessDocument } from '../schema/businessSchema';
import Business from '../schema/businessSchema';

export class BusinessManagerRouter extends AbstractRouter {

    constructor() {
        super();
    }

    protected defaultListen(): void {
        this.router.post("/createBM", (req, res) => this.createBusinessManager(req, res));
        this.router.get("/", (req, res) => this.getBusinessManager(req, res));
    }

    private async getBusinessManager(req: Request, res: Response): Promise<void> {

        try {

            let requestedPage: number = req.query.page ? parseInt(req.query.page as string) : 1;
            if (requestedPage <= 0) {
                requestedPage = 1;
            }

            const query: Query<BusinessDocument[]> = Business.find({});
            const countQuery: Query<BusinessDocument[]> = Business.find({});

            const numberOfBusiness: number = await countQuery.count().exec();

            const totalNumberOfPages: number = Math.ceil(numberOfBusiness / this.ITEMS_PER_PAGE);
            if (requestedPage > totalNumberOfPages && totalNumberOfPages > 0) {
                requestedPage = totalNumberOfPages;
            }

            const businessManager: BusinessDocument[] = await query
                .skip((requestedPage - 1) * this.ITEMS_PER_PAGE)
                .limit(this.ITEMS_PER_PAGE)
                .exec();

            res.status(200).json({
                business: businessManager,
                page: requestedPage,
                pages: totalNumberOfPages
            });

        } catch (err) {
            this.printError("getAllBusiness", err);
            this.showInternalError(res);
        }

    }


    private async createBusinessManager(req: Request, res: Response): Promise<void> {
        try {
            console.log("entro qui");
            // create new cat with data in body
            const newBusiness = new Business(req.body);
            await newBusiness.save();

            console.log("qui arrivo?");

            // object created, send confirmation and the created id
            res.status(201).json({
                username: newBusiness.username.toString(),
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