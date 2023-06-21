import { join } from "path";
import { createDatabase, createDatabaseConfig, modelManager } from "./modules/initialize";
import { Model } from "../interfaces/model";

export const initialize = (path:string,name:string,models:Model[]) => {
    const databasePatch = join(path, `${name}.json`);
    createDatabase(databasePatch)
    createDatabaseConfig(databasePatch, models)
    modelManager(models)
    // createFile('./ducky-database.json',JSON.stringify(databaseConfigData))    
}