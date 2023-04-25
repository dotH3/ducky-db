export const isFileName = (fileName: string):boolean =>{
    // TODO: usar el extname de path
    try {
        const ext = ['json']
        const content = fileName.split('.')
        if(content.length<=1)return false
        const sufix = content[content.length-1]
        if(!ext.includes(sufix))return false
        return true
    } catch (error) {
        console.error(error);
        return false
    }
}
