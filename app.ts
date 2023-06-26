import { DuckyDB } from "./src";
const ducky = new DuckyDB();

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