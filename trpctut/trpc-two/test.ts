function checkToken(token:string,Secret:string,cd:any){
    cd(null, 1)
}

const res = ()=>{
    return new Promise((resolve,reject)=>{
        checkToken("adas","asdasd",(err:any,res:any)=>{
            if(res){
                resolve(res)
            }
            else{
                reject(err)
            }
        })
    })
}


res()
.then(res=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})
