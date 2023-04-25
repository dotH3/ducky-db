import { join, resolve } from "path";
import { configDB } from "./src";



(() => {
    console.clear();
    console.log('> Running!');

    const root = resolve(process.cwd())
    const folder = 'DB'
    const path = join(root,folder)
    
    configDB({
        path, models: [
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
        ]
    })
})();