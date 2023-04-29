import fs from 'fs';
import { resolve, extname, join } from 'path'
import { ConfigDBProps, DB } from './interfaces/temp';
import { isFileName } from './helpers/isParse';
import { checkTables, saveConfig } from './helpers/config';

export const config = ({ path, DBName = 'DuckyDB', models }: ConfigDBProps) => {
    const DBFilePath = join(path, `${DBName}.json`)
    const DBConfigPath = join(path, `DBConfig.json`)
    const existDBFile = fs.existsSync(DBFilePath)

    var db: DB = {
        tables: []
    };
    var output: DB = {
        tables: []
    }
    
    //DB no existe
    if (!existDBFile) {
        fs.writeFileSync(DBFilePath, JSON.stringify(output, null, 2))
        return
    }else

    db = JSON.parse(fs.readFileSync(DBFilePath, 'utf8'))
    
    output.tables = db.tables
    fs.writeFileSync(DBFilePath, JSON.stringify(output, null, 2));
    console.log(`> DBPath: ${DBFilePath}`);

    saveConfig({DBConfigPath,DBPath:DBFilePath,models})
    checkTables({DBConfigPath,DBPath:DBFilePath})
}

export const get = ({table}:{table:string})=>{

}

export default {
    config
}