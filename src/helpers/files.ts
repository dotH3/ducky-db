import fs from 'fs';
import { basename, dirname, extname } from 'path';

export const existFile = (path:string)=>{
    if(fs.existsSync(path))return true;
    return false;
}

export const createFile = (path:string,data:any)=>{
    if(isFileOrDirectory(path)!='file')throw new Error(`path:"${path}" is not a file path`)
    fs.mkdirSync(dirname(path), { recursive: true });
    fs.writeFileSync(path,`${data}`)
}

export const isFileOrDirectory = (path:string):'file'|'directory' =>{
    path = basename(path);
    const extension = extname(path)
    if(!extension)return 'directory'
    return 'file'
}

export const logFile = (path:string)=>{
    console.log(fs.realpathSync(path),fs.readFileSync(path).toString());
}
