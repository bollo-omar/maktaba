import express, { Application } from 'express';
import helmet from 'helmet';
import IBaseRouter from '@/utils/base.router';
import cors from 'cors';
import { globalErrorHandler, notFoundErrorHandler } from '@/middleware/error.middleware';

export default class App {
    private readonly port: number;
    private readonly app: Application;

    constructor(port: number, routes: IBaseRouter[]) {
        this.port = port;
        this.app = express();
        this.initMiddlewares();
        this.initRoutes(routes);
    }

    private initMiddlewares() {
        this.app.use(helmet())
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.json());
    }
    private initErrorHandler(){
        this.app.use(notFoundErrorHandler);
        this.app.use(globalErrorHandler);
    }
    private initRoutes(routes: IBaseRouter[]) {
        routes.forEach((route) => this.app.use(`BASE_URL`, route.router));
    }
    public listen() {
        try {
            this.app.listen(this.port, () => {
                console.log(`listening on port ${this.port}`);
            })
        } catch (error) {
            console.log('Error:', error);
        }
    }
}