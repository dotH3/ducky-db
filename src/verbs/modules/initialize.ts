import path from "path"
import { createFile, existFile, getFileData } from "../../helpers/files"
import system from "../../helpers/system"
import { Model } from "../../interfaces/model"

const databaseConfigPath = './ducky-config.json'

export const createDatabase = (path: string) => {
    if (!existFile(path)) createFile(path, "")
}

export const createDatabaseConfig = (databasePatch: string, models: Model[]) => {
    const databaseName = path.basename(databasePatch).split('.')[0]
    try {
        var configData = JSON.parse(getFileData(databaseConfigPath) as string)
    } catch (error: any) {
        const configNewData = {
            name: databaseName,
            path: databasePatch,
            models
        }
        system.error(error.message)
        createFile(databaseConfigPath, JSON.stringify(configNewData, null, 2));
        system.warn('recreating ducky-config.json . . .');
        configData = JSON.parse(getFileData(databaseConfigPath) as string);
    }
}

export const modelManager = (models: Model[]) => {

}