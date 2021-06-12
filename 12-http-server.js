const http = require('http')

// const server = http.createServer((req,res)=>{
//     console.log(req)
//     res.write('Welcome to our home pagess');
//     res.end()
// })

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short story')
    }
    res.end(
        `<h1>Oops! You been caught</h1>
        <a href="/">Back Home</a> `
    )
})

server.listen(5000)