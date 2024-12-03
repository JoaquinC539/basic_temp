import { Request, Response, Router } from "express";

export class DummyController {
    private routes: Router = Router();
    constructor(){}
    
    public index(req: Request, res: Response) {
        res.status(200).json({ message: "index get message" })
    }
    public post(req: Request, res: Response) {
        res.status(200).json({
            message: "Index post message",
            body: req.body
        })
    }
    public put(req: Request, res: Response) {
        res.status(200).json({
            message: "Index put message",
            body: req.body,
            param: req.params
        })
    }
    public delete(req: Request, res: Response) {
        res.status(200).json(
            {
                message: "Index delete message",
                param: req.params
            }
        )
    }
    public getRoutes():Router{ 
        this.routes.get("/",this.index);  
        this.routes.post("/",this.post);
        this.routes.put("/:param",this.put);
        this.routes.delete("/:param",this.delete);    
        return this.routes;
    }
}