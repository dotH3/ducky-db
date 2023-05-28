import fs from 'fs';
import { join } from 'path'
import { createFile, existFile, logFile } from './helpers/files';
import { createDatabase, createDatabaseConfig } from './helpers/dbMethods';

export const initialize = (path:string,name:string) => {
    const databasePatch = join(path, `${name}.json`);
    
    createDatabase(databasePatch)
    createDatabaseConfig(databasePatch)
    // createFile('./ducky-database.json',JSON.stringify(databaseConfigData))    
    
}

export const get = ()=>{

}


export default {
    initialize
}