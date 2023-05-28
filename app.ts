import { join, resolve } from "path";
import ducky from "./src";

// (() => {
// console.clear();
console.log('> Running!');

// const root = resolve(process.cwd())
// const folder = 'DB'

// const path = join(root,folder)

ducky.initialize('./DB/', "MYDUCK")

// })();