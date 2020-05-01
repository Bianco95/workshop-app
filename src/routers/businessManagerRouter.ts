import { Request, Response } from "express";
import { Query } from "mongoose";
import { AbstractRouter } from "./abstractRouter";
import { BusinessDocument } from '../schema/businessSchema';
import Business from '../schema/businessSchema';

export class BusinessManagerRouter extends AbstractRouter {

    constructor() {
        super();
    }

    protected defaultListen(): void {
        this.router.post("/createBM", (req, res) => this.createBusinessManager(req, res));
    }


    private async createBusinessManager(req: Request, res: Response): Promise<void> {
        try {
            // create new cat with data in body
            const newBusiness = new Business(req.body);
            await newBusiness.save();

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