import fs, { writeFileSync } from 'fs'
let content = "This is student data"
fs.writeFile("storage.txt",content,(err)=>{// is storage.txt file exits it will overwrite 
// otherwise it will create a file and write the data
    if(err){
        console.log("error in storing the data");
    }
    else{
        console.log("Data is stored")
    }
})