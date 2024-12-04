import { Router ,Request,Response} from "express";
import path from 'path'

export class PageController{
    private routes:Router = Router();
    constructor(){}
    public index(req: Request, res: Response){
        res.status(200).sendFile(path.join(__dirname,"..","pages","index.html"))
        // 
    }
    public about(req: Request, res: Response){
        res.status(200).sendFile(path.join(__dirname,"..","pages","about.html"))
    }//
 
    public getRoutes():Router{
        this.routes.get("/",this.index);
        this.routes.get("/about",this.about);
        return this.routes;
    }
}