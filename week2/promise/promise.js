// Promisify version of readfile
const fs = require("node:fs");


function readFiles(filename,encode){
    return new Promise((resolve,reject)=>{
        fs.readFile(filename,encode,(err,content)=>{
            if(err){
                reject(err)
            }
            resolve(content)
        })
       
    })
}



const p =  readFiles("b.txt","utf-8")
p.then((c)=>{
    console.log(c)
}).catch((e)=>{
    console.log(e)
})
