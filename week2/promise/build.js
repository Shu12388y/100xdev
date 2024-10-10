// build your promisify function

const fs =  require("node:fs");


function clearFile(filename,encode){
    if(!filename && !encode){
        throw new Error("Filename and encode required")
    }

    return new Promise((resolve,reject)=>{
        fs.readFile(filename,encode,(err,content)=>{
            if(err){
                return reject(err)
            }
            const trimContent = content.trim()
            fs.writeFile(filename,trimContent,(err)=>{
                if(err){
                    return reject(err)
                }
                return resolve("Done")
            })
        })
    })
}


const f = clearFile("a.txt","utf-8");

f.then((c)=>{
    console.log(c)
}).catch((e)=>{
    console.log(e)
})