import fs from 'fs';
import { join } from 'path'
import { createFile, existFile, logFile } from './helpers/files';
import { createDatabase } from './helpers/dbMethods';

export const initialize = (path:string,name:string) => {
    const databasePatch = join(path, `${name}.json`);

    const databaseConfigData = {
        "name":name,
        "path":databasePatch
    }

    if(!existFile(databasePatch))createDatabase(databasePatch)
    createFile('./ducky-database.json',JSON.stringify(databaseConfigData))    
    // logFile('duckyConfig.json')
}

export const get = ()=>{

}


export default {
    initialize
}