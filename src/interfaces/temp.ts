export interface ConfigDBProps {
    path: string;
    models: {
        key: string;
        example: ValueObject;
    }[];
}

type ValueObject = {
    [key: string]: string | number | boolean;
};