import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();



async function createuser() {
        try {
            await prisma.user.create({
                data:{
                    username:'shubham',
                    password:'shub1234',
                    age:23,
                    city:'jamshedput'
                }
            })
            console.log('done')
        } catch (error) {
            console.log(error)
        }
}

// createuser()


async function getuser() {
        try {
            const res = await prisma.user.findUnique({
                where:{
                    id:1
                },
                select:{
                    username:true
                }
            })
            console.log(res)
        } catch (error) {
            console.log(error)
        }
}

// getuser();



async function addtodo() {
    try {
      
        new Promise((resolve,reject)=>{
                resolve(prisma.todo.create({
                    data:{
                        title:"Go to GYM",
                        description:"Do workout and live healthy",
                        isCompleted:false,
                        userId:1
                    }
                }));
        })
        console.log("done")
    } catch (error) {
        console.log("error")
    }
}

// addtodo()



async function gettodo() {
    try {
        return new Promise((resolve,reject)=>{
            const info = prisma.user.findUnique({
                where:{
                    id:1
                },
                include:{
                    todos:true
                }
            })
            if(info != null){
                resolve(info);
            }
            else{
                reject("No Data")
            }

        })
    } catch (error) {
            console.log(error)
    }
}


gettodo().then((res)=>{
    console.log(res)
}).catch((e)=>{
    console.log(e)
})
// console.log(info)