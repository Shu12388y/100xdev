const fs = require('fs');

const cmd = process.argv[2];

const readFilePromisify = (filename,encode)=>{
    return new Promise((resolve,reject)=>{
        if(!filename && !encode){
            throw new Error("Filename and encodeing needed")
        }
        fs.readFile(filename,encode,(err,content)=>{
            if(err){
                return reject(err)
            }
            return resolve(content)
        })
    })
}



 readFilePromisify(cmd,'utf-8').then((c)=>{
    countLength(c)
}).catch((e)=>{
    console.log(e)
})


function countLength(content){
    const c = content.split(" ");
    let count = 0;
    for (let i = 0; i < c.length; i++) {
        if(c[i] != '')[
            count += 1
        ]
    }
    console.log(count)
}


