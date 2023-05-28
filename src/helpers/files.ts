import fs from 'fs';
import { basename, dirname, extname } from 'path';

export const existFile = (path: string) => {
    if (fs.existsSync(path)) return true;
    return false;
}

export const createFile = (path: string, data: string) => {
    if (isFileOrDirectory(path) != 'file') throw new Error(`path:"${path}" is not a file path`)
    fs.mkdirSync(dirname(path), { recursive: true });
    fs.writeFileSync(path, `${data}`)

}

export const getFileData = (path: string, raw?: boolean): string | Buffer => {
    if (isFileOrDirectory(path) != 'file') throw new Error(`path:${path} is not a file`);
    if (!existFile(path)) throw new Error(`file:${path} not exist`);
    let data = fs.readFileSync(path)
    return (raw ? data : data.toString('utf8'))
}

export const isFileOrDirectory = (path: string): 'file' | 'directory' => {
    path = basename(path);
    const extension = extname(path)
    if (!extension) return 'directory'
    return 'file'
}

export const logFile = (path: string) => {
    console.log(fs.realpathSync(path), fs.readFileSync(path).toString());
}
