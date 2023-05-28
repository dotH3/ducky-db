import c from 'ansi-colors'

const warn = (txt:string)=>{
    console.log(c.yellowBright('[WARN]'),`(ducky-db) > ${txt}`);
}
const error = (txt:string)=>{
    console.log(c.redBright('[ERROR]'),`(ducky-db) > ${txt}`);
}
const success = (txt:string)=>{
    console.log(c.greenBright('[DONE!]'),`(ducky-db) > ${txt}`);
}

export default {
    warn,
    error,
    success
}