export interface ConfigDBProps {
    path: string;
    models: Model[];
    DBName?: string;
    format: boolean;
}

export interface DB {
    models: Model[];
    tables: {
        key: string;
        data: DBObject[]
    }[]
}

interface Model {
    key: string;
    example: DBObject;
}

type DBObject = {
    [key: string]: string | number | boolean;
};