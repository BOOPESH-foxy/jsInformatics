const { rejects } = require('assert')
const http = require('http')
const { resolve } = require('path')
const ip = 'localhost' //127.0.0.1
const port = 3000


const htmlData = `<h1>hey man</h1>`
const htmlData2 = `<h2>thank you</h2>`

const read = (filename) => {
    return new Promise((resolve,rejects) =>{
        fs.read
    })
}

const reqList = (req,res) =>{
    console.log(req.url)
    res.setHeader("content-type","text/html")
    res.writeHead(200)
    switch(req.url){
        case `/thank` : res.end(htmlData2)
            break
        case `/welcome` : res.end(htmlData)
            break
    }
}
const server = http.createServer(reqList)
server.listen(port,ip,() =>{
    console.log(`server running on port ${port}`)
})