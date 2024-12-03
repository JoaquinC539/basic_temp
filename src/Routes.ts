import { Router } from "express";
import { DummyController } from "./controller/dummyController";

export class Routes{
    private routes:Router=Router();
    private dummyController:DummyController=new DummyController();
    constructor(){
        this.routes.use(this.dummyController.getRoutes())
    }
    public getRoutes():Router{
        
        return this.routes;
    }
}