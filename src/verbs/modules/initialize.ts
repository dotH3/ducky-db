import path from "path"
// import { createFile, existFile, getFileData } from "../../helpers/files"
import system from "../../helpers/system"
import { Model } from "../../interfaces/model"
import { File } from "../../helpers/files"

const databaseConfigPath = './ducky-config.json'

const file = new File()

export const createDatabase = (path: string) => {
    if (!file.exist(path)) file.create(path, "")
    // if (!existFile(path)) createFile(path, "")
}

export const createDatabaseConfig = (databasePatch: string, models: Model[]) => {
    const databaseName = path.basename(databasePatch).split('.')[0]
    try {
        var configData = JSON.parse(file.read(databaseConfigPath) as string)
    } catch (error: any) {
        const configNewData = {
            name: databaseName,
            path: databasePatch,
            models
        }
        system.error(error.message)
        file.create(databaseConfigPath, JSON.stringify(configNewData, null, 2));
        system.warn('recreating ducky-config.json . . .');
        configData = file.readJSON(databaseConfigPath);
        // configData = JSON.parse(file.read(databaseConfigPath) as string);
    }
}

export const modelManager = (models: Model[]) => {

}