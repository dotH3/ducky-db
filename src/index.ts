import { Model } from './interfaces/model';
import { initialize } from './verbs/initialize';
import { get } from './verbs/get';



export class duckyDB {
    initialize: (path:string,name:string,models:Model[])=>void;
    get: ()=> void;
    constructor(){
        this.initialize = initialize
        this.get = get
    }
}