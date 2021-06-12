const {readFile,writeFile} = require('fs')

// readFile('./content/first.txt',(err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result)
// })  //we will buffer because we didn't provided utf value

// readFile('./content/first.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result)
// })  //Now resolved
console.log('start')
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result; 
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result; 
        writeFile('./content/result-aync.txt',`Here is the result: ${first},${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('donw with this task')
    })
    })
})  
console.log('starting next task')