import { Router } from "express";
import { PageController } from "./controller/pageController";

export class PageRoutes{
    private routes:Router=Router();

    private pageController:PageController=new PageController();
    constructor(){

        this.routes.use(this.pageController.getRoutes())
    }
    public getRoutes():Router{
        
        return this.routes;
    }
}