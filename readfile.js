import fs from 'fs'
// Asynchronous
fs.readFile("sample.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error in reading file: ")
    }
    else{
        console.log("Contents of the file are: ",data)
    }
})