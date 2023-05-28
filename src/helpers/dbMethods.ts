import path from "path"
import { createFile, existFile, getFileData } from "./files"
import system from "./system"

export const createDatabase = (path:string)=>{
    if(!existFile(path))createFile(path, "")
}

export const createDatabaseConfig = (databasePatch:string)=>{
    // TODO: change de path of the config file

    const databaseName = path.basename(databasePatch).split('.')[0]
    if(!existFile('./ducky-config.json'))createFile('./ducky-config.json','{}')
    var configData = getFileData('./ducky-config.json') as string
    try {
        configData = JSON.parse(configData)
    } catch (error:any) {
        system.error(error.message)
        createFile('./ducky-config.json','{}')
        system.warn('recreating ducky-config.json . . .')
        configData = getFileData('./ducky-config.json') as string
    }
    console.log(configData);
    return 
    const configNewData = {
        name: databaseName,
        path: databasePatch
    }
}