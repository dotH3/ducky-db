import { Model } from './interfaces/model';
import { initialize } from './verbs/initialize';
import { get } from './verbs/get';
export class DuckyDB {
    initialize: (path:string,name:string,models:Model[])=>void;
    get: ()=>object;
    constructor(msg?:string){
        this.initialize = initialize;
        this.get = get;
        console.log(`LOG:`,msg)
    }
}