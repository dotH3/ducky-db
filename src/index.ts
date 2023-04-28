import fs from 'fs';
import { resolve, extname, join } from 'path'
import { ConfigDBProps, DB } from './interfaces/temp';
import { isFileName } from './helpers/isParse';


export const config = ({ path, DBName = 'DuckyDB', models, format }: ConfigDBProps) => {
    const DBFilePath = join(path, `${DBName}.json`)
    const existDBFile = fs.existsSync(DBFilePath)

    var db: DB = {
        models: [],
        tables: []
    };

    var inFormat: number = format ? 2 : 0
    var modelsName: Array<string> = [];
    var output: DB = {
        models: [],
        tables: []
    }

    //estadisticas
    models.map(model => {
        modelsName.push(model.key);
    })
    
    //DB no existe
    if (!existDBFile) {
        output.models=models
        fs.writeFileSync(DBFilePath, JSON.stringify(output, null, inFormat))
        return
    }else

    db = JSON.parse(fs.readFileSync(DBFilePath, 'utf8'))
    
    //DB diferente
    // console.log(db.models.length,models.length);
    if (db.models.length != models.length){
        console.log(`> Merging models...`);
    }
    
    output.models = models
    output.tables = db.tables
    fs.writeFileSync(DBFilePath, JSON.stringify(output, null, inFormat));
    console.log(`> DBPath: ${DBFilePath}`);
}

export default {
    config
}