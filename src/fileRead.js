const { rejects } = require("assert")
const { resolve } = require("path")
const fs = require('fs')
const { message } = require("statuses")

const readFile = (filename) =>{
   return new Promise((resolve,rejects) =>{
    fs.readFile(filename,(err,data)=>{
        if(err){
            rejects("Unable to read file , Something went wrong")
        }
        resolve("data saved successfully")
    })
   })
}
readFile(`${__dirname}/Boo.txt`)
    .then((data) =>{
        console.log(data.toString());
    }).catch((message) => {
        console.log(message);
    })