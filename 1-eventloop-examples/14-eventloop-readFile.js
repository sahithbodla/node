const { readFile } = require("fs")

console.log('started a first task')
// check file path
readFile("./content/first.txt", 'utf-8',(err,result) => {
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
})
console.log('starting next task')

//since readFile is async the node will offload that method and continue with the following methods and it displays the result only after getting the result, this is how the event loop works

readFile("./content/second.txt", 'utf-8',(err,result) => {
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed second task')
})
console.log('starting next task')