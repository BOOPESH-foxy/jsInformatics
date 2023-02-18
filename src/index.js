const { rejects } = require("assert")
const { resolve } = require("path");
const { message } = require("statuses");

const isrideAcc = false
const fun1 = new Promise((resolve,rejects) =>{
    if (isrideAcc){
        resolve('enjoy your ride');
    }
    else{
        rejects("declined");
    }
})
fun1.then((message)=> {
    console.log(message)
}).catch((message)=>{
  console.log(message)
})

