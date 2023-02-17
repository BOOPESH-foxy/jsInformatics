const { rejects } = require("assert")
const { resolve } = require("path")
const fs = require('fs')
const { message } = require("statuses")

const read = (filename) =>{
    return new Promise((resolve,rejects) =>{
     fs.readFile(filename,(err,data)=>{
         if(err){
             rejects("Unable read file")
         }
         resolve(data)
     })
    })
 }

const write = (filename,breed) =>{
   return new Promise((resolve,rejects) =>{
    fs.writeFile(filename,breed,(err)=>{
        if(err || breed.length > 10){
            rejects("Unable to write data")
        }
        resolve("data savad successfully")
    })
   })
}
// write(`${__dirname}/Boo.txt`,'pitbull')
//     .then((message) =>{
//         console.log(message);
//     }).catch((message) => {
//         console.log(message);
//     })


read(`${__dirname}/Boo.txt`)
.then((data) =>{
    return "Breed : " + data.toString()
})
.then((data) =>{
    return write((`${__dirname}/Boo.txt`),data)
})
.then((message) => {
    console.log(message)
})
.catch((message) => {
    console.log(message)
})
.finally(() =>{
console.log("finally executed")
})
