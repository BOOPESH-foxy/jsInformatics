const http = require('http')
const ip = 'localhost' //127.0.0.1
const port = 3000

const reqList = (req,res) =>{
    res.setHeader("content-type","application/json")
    res.writeHead(200)
    res.end(`{
        message : success
        "url" : "http://random/images/myapplication"
    }`)
}
const server = http.createServer(reqList)
server.listen(port,ip,() =>{
    console.log(`server running on port ${port}`)

})