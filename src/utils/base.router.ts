import { Router } from "express";

export default interface IBaseRouter {
    readonly path: string;
    readonly router: Router;
}