const { write } = require("fs")
const doFileOp = async() => {
    try {
        const breed = await read(`${__dirname}/Boo.txt`)
        const sd = await write(`${__dirname}/Boo.txt`,breed.toString())
        console.log(sd)
    }catch(err){
        console.log(err);
    }
}
doFileOp();
console.log("something to be performed");