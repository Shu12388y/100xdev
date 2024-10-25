import fs from "node:fs"
import path from "node:path";


export async function uploader(filename){
    try {
        // Ensure the destination has the filename
        const destinationPath = path.resolve('./public', path.basename(filename));

        // Use the asynchronous copyFile method
        await fs.copyFile(filename, destinationPath,(err)=>{
            if(err){
                console.log(err)
            }
        });

    } catch (error) {
        console.error('Error copying file:', error);
    }

}