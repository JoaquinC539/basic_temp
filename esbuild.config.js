const esbuild=require("esbuild");
const { mkdirSync, readdirSync, lstatSync, copyFileSync } = require("fs");
const path=require("path")

function copyFolderSync(from,to){
    mkdirSync(to,{recursive:true});
    for(const file of readdirSync(from)){        
        const sourcePath=path.join(from,file);
        const destPath=path.join(to,file);
        if(lstatSync(sourcePath).isDirectory()){
            copyFolderSync(sourcePath,destPath);
        }else{
            copyFileSync(sourcePath,destPath);
        }
    }
}

const fs =require("fs");

const createDir=(relPath)=>{
    if(!fs.existsSync(relPath)){        
        fs.mkdirSync(relPath);
    }
}
const transferFiles=(from,to)=>{
    createDir(to);
    if(!fs.existsSync(from)){        
        console.log("Error it doesnt exists said relative source path directory")
        return;
    }    
    const sp=path.join(__dirname,from)
    const dirPath=path.join(__dirname,to)
    const files=fs.readdirSync(sp)    
    files.forEach((file)=>{
        const fsp=file.split(".")
        if(fsp[fsp.length-1]==="ts" ){
            return;
        } 
        const spf=path.join(sp,file);
        const dpf=path.join(dirPath,file)
        if(!fs.lstatSync(spf).isDirectory()){
            fs.copyFileSync(spf,dpf);
        }else{
            return transferFiles("./"+from+"/"+file,"./"+to+"/"+file+"/" )
        }  
    })
    
}

esbuild.build({
    entryPoints:["out/index.js"],
    outfile:'dist/app/bundle.js',
    bundle:true,
    platform:"node",
    target:"node18",
    sourcemap:false,
    minify:false
}).then(()=>{
    // copyFolderSync("public","dist/public");
    // transferFiles("./src/public","./dist/public")
    transferFiles("./src","./dist")
}).catch(()=>process.exit(1))