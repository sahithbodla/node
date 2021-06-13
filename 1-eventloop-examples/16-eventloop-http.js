const http = require("http")

const server = http.createServer((req,res)=>{
    console.log('request event')
    res.end("Hello World")
})

server.listen(5000, () => {
    console.log('Server is listening on port: 5000.........')
})

//listen is async, now event loop is listening for request to comein, once request comes it calls the call back function