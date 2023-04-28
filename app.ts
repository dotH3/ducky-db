import { join, resolve } from "path";
import ducky from "./src";

// (() => {
// console.clear();
console.log('> Running!');

const root = resolve(process.cwd())
const folder = 'DB'
const path = join(root,folder)

ducky.config({
    path,
    models: [
        {
            key: 'usuario',
            example: {
                nombre: 'joaquin',
                edad: 22,
            }
        },
        {
            key: 'producto',
            example: {
                barra: 'joaquin',
                precio: 42,
            }
        },
    ],
    format:true
})

// })();