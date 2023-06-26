import fs from 'fs';
import { basename, dirname, extname } from 'path';
export class File {
    exist: (path:string)=>boolean;
    create: (path:string, data:string)=>void;
    read: (path:string, raw?:boolean)=>string|Buffer;
    readJSON: (path:string)=>object|JSON;
    type: (path:string)=>'file'|'directory';
    
    constructor(){
        this.exist = exist;
        this.create = create;
        this.read = read;
        this.readJSON = readJSON;
        this.type = type;
    }
}

const exist = (path: string) => {
    if (fs.existsSync(path)) return true;
    return false;
}

const create = (path: string, data: string) => {
    if (type(path) != 'file') throw new Error(`path:"${path}" is not a file path`);
    // if (isFileOrDirectory(path) != 'file') throw new Error(`path:"${path}" is not a file path`)
    fs.mkdirSync(dirname(path), { recursive: true });
    fs.writeFileSync(path, `${data}`);
}

const read = (path: string, raw?: boolean): string | Buffer => {
    if (type(path) != 'file') throw new Error(`path:${path} is not a file`);
    if (!exist(path)) throw new Error(`file:${path} not exist`);
    let data = fs.readFileSync(path);
    return (raw ? data : data.toString('utf8'));
}

const readJSON = (path: string): object|JSON => {
    if (type(path) != 'file') throw new Error(`path:${path} is not a file`);
    if (!exist(path)) throw new Error(`file:${path} not exist`);
    let data:string|Buffer = fs.readFileSync(path);
    data = data.toString('utf8');
    return (JSON.parse(data));
}

const type = (path: string): 'file' | 'directory' => {
    path = basename(path);
    const extension = extname(path);
    if (!extension) return 'directory';
    return 'file';
}