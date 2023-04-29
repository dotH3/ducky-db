import fs from 'fs';
import { DB, DBConfig, Model } from '../interfaces/temp';
import path from 'path';

export const saveConfig = ({ DBPath, DBConfigPath, models }: {
    DBPath: string,
    DBConfigPath: string,
    models: Model[]
}) => {
    var output: DBConfig = {
        models,
        DBPath,
        DBConfigPath
    };
    var modelsList: string[];

    fs.writeFileSync(DBConfigPath, JSON.stringify(output, null, 2))
    console.log(`> DBConfigPath: ${DBConfigPath}`);
}

export const checkTables = ({ DBPath, DBConfigPath }: { DBPath: string, DBConfigPath: string }) => {
    const dbName = path.basename(DBPath);
    var db: DB = JSON.parse(fs.readFileSync(DBPath, 'utf8'))
    const dbConfig: DBConfig = JSON.parse(fs.readFileSync(DBConfigPath, 'utf8'));
    var modelsList: Array<string> = [];

    dbConfig.models.map((model, index) => {
        modelsList.push(model.key)
    })

    console.log('> Checking tables...');

    db.tables.map((table, tableIndex) => {
        type DBTable = typeof table.data;
        console.log(`TABLE: ${table.key} (${tableIndex})`);
        if(!modelsList.includes(table.key))throw new Error(`The table with key:"${table.key}" hasn't a model. Location: (DB:"${dbName}" > TableIndex:${tableIndex})`)
         
        table.data.map((data, dataIndex) => {
            console.log(`DATA: ${dataIndex}`);
        })
        return

    })

    // dbConfig.models.map(model=>{

    // })

    // var output:DBConfig = {
    //     models:[],
    //     DBConfigPath,
    //     DBPath
    // };



}