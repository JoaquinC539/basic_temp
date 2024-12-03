
import express from 'express';
import bodyParser from 'body-parser';
import { Routes } from './Routes';
import path from 'path';
const cors=require("cors");
//
export class App{
    private app=express();
    private routes=new Routes();
    public constructor(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:false}));
        this.app.use(cors())
        // this.app.use(express.static("public"))
        this.app.use(express.static(path.join(__dirname,"public")))
        this.app.use("/api",this.routes.getRoutes())
    }

    public runApp():void{
        this.app.listen(3500,()=>{
            console.log("App listening on port 3500");
        })
    }

}