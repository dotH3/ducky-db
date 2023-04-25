import fs from 'fs';
import { resolve, extname, join } from 'path'
import { ConfigDBProps } from './interfaces/temp';
import { isFileName } from './helpers/isParse';


export const configDB = ({ path, models }: ConfigDBProps) => {
    const DBName = 'Database.json'
    const DBFile = join(path,DBName)
    

    var modelsArray: Array<string> = [];
    models.map(model => {
        modelsArray.push(model.key);
    })
    console.log('> Models', modelsArray);

    if(!isFileName(path))
    if(!fs.existsSync(path))fs.mkdirSync(path)
    if(!fs.existsSync(DBFile))fs.writeFileSync(DBFile, '')

}



