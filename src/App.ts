import bodyParser from "body-parser";
import express from "express";
import mongoose from 'mongoose';
import { WorkshopRouter } from './routers/workshopRouter';
import { BusinessManagerRouter } from "./routers/businessManagerRouter";
import { CatRouter } from './routers/carRouter';

export class App {

    private express;

    private readonly VERSION: string = "v1";

    private readonly MONGO_URL: string = "mongodb://mongo:27017/rest-api"; //wip

    constructor() {

        this.express = express();

        this.initDatabase().then(() => {
            this.initMiddlewares();
            this.handleRoutes();
        });
    }


    private async initDatabase(): Promise<void> {
        await mongoose.connect(this.MONGO_URL, { useNewUrlParser: true });
    }

    private initMiddlewares(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use((req, res, next) => {
            res.setHeader("Content-Type", "application/json");
            next();
        });
    }

    private handleRoutes(): void {
        this.express.use(`/${this.VERSION}/workshops`, new WorkshopRouter().getRouter());
        this.express.use(`/${this.VERSION}/businessManager`, new BusinessManagerRouter().getRouter());
        this.express.use(`/${this.VERSION}/car`, new CatRouter().getRouter());
    }

    public startServer(): void {
        this.express.listen(3000, () => {
            console.log("Listening on port 3000");
        });
    }
}
