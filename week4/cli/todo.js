const fs = require('fs');


const readDB =  fs.readFileSync('data.json','utf-8')



function main(arg){
    if(arg[2] == "--get" && arg[3] == "todo"){
        console.log(readDB)
    }
    if(arg[2] == "--add"){
        let i = 0;
        const todo = arg[3]
        const status = arg[4]
        let temp =  JSON.parse(readDB);
        const data = {
            id:i + 1,
            todo:todo,
            status:status
        }
        temp.push(data)
        fs.writeFileSync('data.json',JSON.stringify(temp),'utf-8');
     }
}


main(process.argv)

