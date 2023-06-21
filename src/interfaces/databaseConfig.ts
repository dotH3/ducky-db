import { Model } from "./model";

export interface DatabaseConfig {
    path:string;
    name:string;
    models: Model[]
}
