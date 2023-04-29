export interface ConfigDBProps {
    path: string;
    models: Model[];
    DBName?: string;
}

export interface DB {
    tables: {
        key: string;
        data: DBObject[]
    }[]
}

export interface DBConfig {
    models: Model[],
    DBPath:string
    DBConfigPath:string
}

export interface Model {
    key: string;
    example: DBObject;
}

type DBObject = {
    [key: string]: string | number | boolean;
};