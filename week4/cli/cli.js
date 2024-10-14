const fs =  require("fs");
const {program} = require('commander');
const path = require("path");

program.option('--path')
program.parse()

const fileName = program.args[0];

const filePath = path.join(__dirname,fileName);

fs.readFile(fileName,'utf-8',(err,content)=>{
        if(err){
                console.log(err)
        }
        else{
             const res = countWords(content.trim(""))
             console.log(res)
        }
})


function countWords(content){
        let count = 0
        for (let i = 0; i < content.length ; i++) {
                if(content[i] == " " && content[i+1] != " "){
                        count += 1
                }
        }
        return count+1
}


