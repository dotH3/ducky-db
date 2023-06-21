import { join, resolve } from "path";
import { duckyDB } from "./src";

console.log('> Running!');

// const models = [{
//     name: 'usuarios',
//     value: {
//         key: 'usuarios',
//         type: 'string',
//     }
// }]

const ducky = new duckyDB()
ducky.initialize('./DB/', "MYDUCK", [{
    name: 'usuarios',
    value: [
        {
            key: 'nombre',
            type: 'string'
        },
        {
            key: 'edad',
            type: 'number'
        }
    ]
}])

// })();