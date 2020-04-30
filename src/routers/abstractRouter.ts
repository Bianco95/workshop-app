import { Response, Router } from "express";

export abstract class AbstractRouter {

    protected router: Router;

    protected readonly ITEMS_PER_PAGE: number = 50;

    constructor() {
        this.router = Router();
        this.defaultListen();
    }

    protected abstract defaultListen(): void;

    public getRouter(): Router {
        return this.router;
    }

    protected sendInternalServerError(res: Response): void {
        res.status(500).json({ error: "Internal server error" });
    }

    protected sendResourceNotFound(res: Response): void {
        res.status(404).json({ error: "Resource not found" });
    }

    protected sendUnauthorized(res: Response): void {
        res.status(403).json({ error: "Unauthorized" });
    }

}
