export interface Model {
    name: string;
    value: ModelProperty[]
}

interface ModelProperty {
    key: string;
    type: 'string'|'number'|'boolean'|ModelProperty[]
}

type ValueObject = {
    [key: string]: 'string'|'number'|'boolean'
};