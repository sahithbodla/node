const http = require("http")

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("Home Page")
    }
    if(req.url === "/about"){
        // Blocking code !!!!
        for(i=0;i<1000;i++){
            for(j=0;j<1000;j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end("About Page")
    }
    res.end("error page")
})

// This for loop can not be offloaded, i.e., the other users can use application only after this for loop execution
// Here only after console logging all the i and j values, we can access home page, or else we cant
// That is why we should always use async methods, so that other users are not blocked

server.listen(5000, () => {
    console.log('Server Listening on port: 5000')
})

